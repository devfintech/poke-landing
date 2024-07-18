import useSWR from "swr"
import { formatUnits } from "viem"
import { Address, erc20ABI } from "wagmi"
import { multicall } from "wagmi/actions"
import { useClientStore } from "../stores/use-client-store"

export const useBalanceV2 = (
  config: {
    token?: Address
    address?: Address | ""
    refreshInterval?: number
    chainId?: number
    enabled?: boolean
    refreshKey?: string
  } = {},
) => {
  const { account, publicClient } = useClientStore({ chainId: config?.chainId })

  const response = useSWR(
    ["get-balance", publicClient, account, config],
    async () => {
      const enabled = config?.enabled ?? true

      if (!publicClient || !enabled) return
      const _account = config?.address || account

      if (!_account) return

      let value: bigint = 0n
      let decimals: number = 18
      let symbol: string = ""
      let formatted: string = ""

      if (config?.token) {
        const [_value, _decimals, _symbol] = await multicall({
          contracts: [
            {
              abi: erc20ABI,
              address: config.token,
              functionName: "balanceOf",
              args: [_account],
            },
            {
              abi: erc20ABI,
              address: config.token,
              functionName: "decimals",
            },
            {
              abi: erc20ABI,
              address: config.token,
              functionName: "symbol",
            },
          ],
          chainId: config?.chainId || publicClient?.chain?.id,
          allowFailure: false,
        })

        value = _value
        decimals = _decimals
        symbol = _symbol
      } else {
        value = await publicClient.getBalance({
          address: _account,
        })
        decimals = publicClient.chain?.nativeCurrency?.decimals
        symbol = publicClient.chain?.nativeCurrency?.symbol
      }

      formatted = formatUnits(value, decimals)

      return {
        value,
        formatted,
        decimals,
        symbol,
      }
    },
    {
      refreshInterval: config?.refreshInterval,
    },
  )

  return response
}
