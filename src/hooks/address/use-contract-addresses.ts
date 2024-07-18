import { Address, useNetwork } from "wagmi"

import { CONTRACTS } from "@/constants/contracts"
import { useWeb3Store } from "@/hooks/stores/use-web3-store"

export const getContractAddresses = (chainId: number) => {
  return Object.fromEntries(
    Object.entries(CONTRACTS).map(([key, object]) => [key, object[chainId as keyof typeof object]]),
  ) as Record<keyof typeof CONTRACTS, Address>
}

export const useContractAddresses = () => {
  const { chain } = useNetwork()

  const { chain: chainStore } = useWeb3Store()
  const currentChain = chain || chainStore

  return getContractAddresses(currentChain?.id)
}
