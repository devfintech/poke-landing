import { useCallback } from "react"
import useSWR, { SWRConfiguration } from "swr"
import { BaseError, formatUnits, hexToBigInt, isAddress, parseUnits } from "viem"
import { Address, erc20ABI, useToken } from "wagmi"

import { popError, popPending, popPendingConfirm, popSuccess, popWeb3Errors } from "@/utils/pop"
import { useClientStore } from "../stores/use-client-store"

const MaxUint256 = hexToBigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")

/**
 * Returns token allowance and handle approve token
 * @param {Address} address address of token
 * @param {Address} spender address of spender get balance token
 * @param {SWRConfiguration} config override swr config
 */
export const useAllowance = (address?: Address, spender?: Address, config?: SWRConfiguration) => {
  const { chain, account, publicClient, walletClient } = useClientStore()

  const { data: token } = useToken({
    address,
    chainId: chain.id,
    enabled: Boolean(address && spender),
  })

  const {
    data: allowance,
    isLoading: isAllowanceLoading,
    mutate: refetchAllowance,
  } = useSWR(
    ["get-allowance", account, publicClient, address, spender],
    async () => {
      if (!account || !address || !spender) return

      if (!isAddress(address) || !isAddress(spender)) return

      const allowance = await publicClient.readContract({
        abi: erc20ABI,
        address,
        functionName: "allowance",
        args: [account, spender],
      })

      if (!token) return

      return allowance
    },
    config,
  )
  const handleApprove = useCallback(
    async (amount?: string) => {
      try {
        if (!walletClient || !address || !spender || !token) return

        popPendingConfirm()
        const hash = await walletClient.writeContract({
          account,
          abi: erc20ABI,
          address,
          functionName: "approve",
          args: [spender, amount ? parseUnits(amount, token?.decimals) : MaxUint256],
        })
        popPending({ message: `Approving spending cap for ${token?.symbol || "the token"}`, hash })

        const { status } = await publicClient.waitForTransactionReceipt({
          hash,
        })
        if (status === "success") {
          popSuccess({
            message: `Approve token successfully`,
            hash,
          })
          refetchAllowance()
        } else {
          popError({ message: "Contract execution failed", hash })
        }
      } catch (err) {
        popWeb3Errors(err as BaseError, "Approve failed")
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [walletClient, address, spender, account, token?.symbol, publicClient],
  )

  const allowanceFormatted = allowance && token ? +formatUnits(allowance || BigInt(0), token?.decimals) : 0

  return { allowance, allowanceFormatted, isAllowanceLoading, approve: handleApprove }
}
