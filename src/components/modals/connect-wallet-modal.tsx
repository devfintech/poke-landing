import { ConnectorIds, wallets } from "@/configs/wallets.config"
import { useModalStore } from "@/hooks/stores/use-modals-store"
import { useActive } from "@/hooks/wallet/use-active"
import { Modal } from "@/libs/ui/modal"
import { cn } from "@/utils/classnames"

const hasInjectedProvider = typeof window !== "undefined" && typeof window["ethereum"] !== "undefined"

export const ConnectWalletModal = () => {
  const { isOpenModalConnectWallet, setIsOpenModalConnectWallet } = useModalStore()
  const { connectors, connect } = useActive()

  return (
    <Modal
      className=""
      classNames={{
        content: cn("!p-4"),
      }}
      width={320}
      title="Connect Wallet"
      open={isOpenModalConnectWallet}
      onCancel={() => setIsOpenModalConnectWallet(false)}
    >
      <div className="mt-3 grid grid-cols-1 gap-y-2">
        {wallets.map((wallet) => {
          if (!wallet.injected || (wallet.injected && hasInjectedProvider)) {
            if (
              wallet.connectorId === ConnectorIds?.WalletConnect &&
              !connectors.find((connector) => connector.id === ConnectorIds.WalletConnect)
            )
              return

            return (
              <button
                className="hover:bg-primary-500 group flex flex-row items-center gap-4 overflow-hidden rounded-lg px-2 py-2"
                key={wallet.name}
                onClick={() => connect(wallet)}
              >
                <img
                  src={wallet.iconURI}
                  title={wallet.name}
                  role="button"
                  className="w-10 rounded-sm  object-contain transition-all group-hover:scale-105"
                />
                <p className="text-base font-semibold">{wallet.name}</p>
              </button>
            )
          }
        })}
      </div>
    </Modal>
  )
}
