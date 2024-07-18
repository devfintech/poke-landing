import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useNetwork } from "wagmi"

import { useShallow } from "zustand/react/shallow"
import { useWeb3Store } from "../stores/use-web3-store"

export const useSentryChain = () => {
  const { chain: currentChain } = useNetwork()
  const {
    chain: chainStore,
    supportedChains,
    setChain,
  } = useWeb3Store(
    useShallow((state) => ({ chain: state.chain, supportedChains: state.supportedChains, setChain: state.setChain })),
  )

  const [searchParams, setSearchParams] = useSearchParams()

  const chainId = Number(searchParams.get("chain_id"))

  useEffect(() => {
    if (!chainStore) return

    if (currentChain) {
      if (currentChain.id !== chainStore.id) {
        if (currentChain.unsupported) {
          searchParams.set("chain_id", currentChain.id.toString())

          setSearchParams(searchParams)
        } else {
          setChain(currentChain)

          searchParams.set("chain_id", currentChain.id.toString())

          setSearchParams(searchParams)
        }
      }
    } else {
      const chainSelectedInParam = supportedChains.find((supportedChain) => supportedChain.id === chainId)

      if (!chainSelectedInParam) return

      if (chainSelectedInParam.id !== chainStore.id) {
        setChain(chainSelectedInParam)
      }
    }
  }, [currentChain, chainId, chainStore])

  return null
}
