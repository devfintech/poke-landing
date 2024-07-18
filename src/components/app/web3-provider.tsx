import { appConfig } from "@/configs/app.config"
import { useAppSettingsStore } from "@/hooks/stores/use-app-settings-store"
import { useWeb3Store } from "@/hooks/stores/use-web3-store"
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react"
import { FC, ReactNode } from "react"
import { WagmiConfig } from "wagmi"
import { useShallow } from "zustand/react/shallow"

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
}

interface Web3ProviderProps {
  children?: ReactNode
}

export const Web3Provider: FC<Web3ProviderProps> = ({ children }) => {
  const { supportedChains } = useWeb3Store(useShallow((state) => ({ supportedChains: state.supportedChains })))

  const { theme } = useAppSettingsStore(useShallow((state) => ({ theme: state.theme })))

  const wagmiConfig = defaultWagmiConfig({
    chains: supportedChains,
    projectId: appConfig.walletConnectProjectId,
    metadata,
    enableWalletConnect: Boolean(appConfig.walletConnectProjectId),
    // enableWalletConnect: false,
  })

  // 3. Create modal
  createWeb3Modal({
    wagmiConfig,
    projectId: appConfig.walletConnectProjectId,
    chains: supportedChains,
    themeMode: theme,
  })

  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}
