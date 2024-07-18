import { isDesktop } from "react-device-detect"
import { toast } from "react-toastify"
import { UserRejectedRequestError } from "viem"
import { useAccount, useConnect, useDisconnect } from "wagmi"

import { ConnectorIds, Wallet } from "@/configs/wallets.config"
import { openLinkInNewTab } from "@/utils/common"
import { useShallow } from "zustand/react/shallow"
import { useAuth } from "../core/use-auth"
import { useModalStore } from "../stores/use-modals-store"
import { useWeb3Store } from "../stores/use-web3-store"

export function useActive() {
  const { isConnecting, address: account } = useAccount()
  const { chain } = useWeb3Store(useShallow((state) => ({ chain: state.chain })))
  const { logout } = useAuth()
  const { connectors, connectAsync } = useConnect()
  const { disconnectAsync } = useDisconnect()

  const { setIsOpenModalConnectWallet } = useModalStore()

  async function connect2ConnectorId(connectorId: ConnectorIds) {
    try {
      const connector = connectors.find((connector) => connector.id === connectorId || connector.name === connectorId)

      await connectAsync({
        connector,
        chainId: chain.id,
      })
    } catch (err) {
      if (err instanceof UserRejectedRequestError) {
        toast.error("You have rejected the connect request")
      }
    }
  }

  function connect(wallet: Wallet) {
    if (wallet.injected) {
      connect2ConnectorId(wallet.connectorId)
    } else if (wallet.connectorId === ConnectorIds.WalletConnect) {
      connect2ConnectorId(wallet.connectorId)
    } else if (isDesktop) {
      // In Desktop
      if (
        (typeof window.ethereum !== "undefined" && window.ethereum[wallet.etherId]) ||
        window[wallet.etherId as keyof typeof window]
      ) {
        connect2ConnectorId(wallet.connectorId)
      } else if (wallet.mobileOnly) {
        connect2ConnectorId(ConnectorIds.WalletConnect)
      } else {
        openLinkInNewTab(wallet.downloadUrl)
      }
    } else {
      // In Mobile
      if (typeof window.ethereum !== "undefined") {
        connect2ConnectorId(wallet.connectorId)
      } else if (wallet.deepLink) {
        openLinkInNewTab(wallet.deepLink)
      } else {
        connect2ConnectorId(ConnectorIds.WalletConnect)
      }
    }
    setIsOpenModalConnectWallet(false)
  }

  async function disconnect() {
    await disconnectAsync()
    logout()
  }

  function connectWallet() {
    setIsOpenModalConnectWallet(true)
  }

  return {
    account,
    isConnecting,
    connectors,

    connect,
    connectWallet,
    disconnect,
  }
}
