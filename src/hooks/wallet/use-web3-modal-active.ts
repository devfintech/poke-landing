import { useWeb3Modal, useWeb3ModalState } from "@web3modal/wagmi/react"
import { useAccount } from "wagmi"

export const useWeb3ModalActive = () => {
  const { open, close } = useWeb3Modal()

  const { open: isModalOpen, selectedNetworkId } = useWeb3ModalState()

  const { address: account, isConnected, isConnecting } = useAccount()

  return {
    account,
    isConnected,
    isConnecting,
    isModalOpen,
    selectedNetworkId,

    openWeb3Modal: open,
    closeWeb3Modal: close,
  }
}
