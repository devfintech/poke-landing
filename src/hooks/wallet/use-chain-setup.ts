import { useCallback } from "react"
import { useSearchParams } from "react-router-dom"
import { toast } from "react-toastify"
import { Chain, useAccount, useSwitchNetwork } from "wagmi"

import { useWeb3Store } from "../stores/use-web3-store"

export function useChainSetup() {
  const { address: account } = useAccount()
  const { chain: chainStore, isSwitchingChain, supportedChains, setIsSwitchingChain } = useWeb3Store()

  const { switchNetworkAsync } = useSwitchNetwork()

  const [searchParams, setSearchParams] = useSearchParams()

  const chainId = Number(searchParams.get("chain_id"))

  const isReadySwitchChain = typeof switchNetworkAsync === "function"

  const selectChain = useCallback(
    async (chain: Chain) => {
      try {
        if (account) {
          if (isReadySwitchChain) {
            setIsSwitchingChain(true)
            const chainSelected = await switchNetworkAsync(chain.id)

            if (chainId !== chain.id) {
              searchParams.set("chain_id", chainSelected.id.toString())

              setSearchParams(searchParams)

              // Reload page when switch chain
              // window.location.reload()
            }
          } else {
            toast.error("An error occurred while switching networks")
          }
        } else {
          if (chainId !== chain.id) {
            searchParams.set("chain_id", chain.id.toString())
            setSearchParams(searchParams)

            // Reload page when switch chain
            // window.location.reload()
          }
        }
      } catch (err) {
        toast.error("Switch network failed")
      } finally {
        setIsSwitchingChain(false)
      }
    },
    [account, chainId, isReadySwitchChain, setSearchParams, switchNetworkAsync],
  )

  return {
    chainStore,
    chains: supportedChains,
    isSwitchingChain,
    isReadySwitchChain,

    selectChain,
    switchNetworkAsync,
  }
}
