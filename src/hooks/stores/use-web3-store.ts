import { storageKeys } from "@/configs/storage.config"
import { ContractAddressConfig, TokenAddressConfig, TokenInfo } from "@/types/web3.type"
import { Chain } from "wagmi"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { defaultChain, supportedChains } from "./../../configs/chains.config"

export interface Web3StoreProps {
  supportedChains: Chain[]
  tokens: TokenInfo[]
  token: TokenAddressConfig
  chain: Chain
  contract: ContractAddressConfig
  enabled: boolean
  isTestnet: boolean
  isSwitchingChain: boolean

  setIsSwitchingChain(isSwitchingChain: boolean): void
  setIsTestnet(isTestnet: boolean): void
  setEnabled(enabled: boolean): void
  setToken(token: TokenAddressConfig): void
  setTokens(tokens: TokenInfo[]): void
  setContract(contract: ContractAddressConfig): void
  setChain(chain: Chain): void
  setSupportedChains(supportedChains: Chain[]): void
}

export const useWeb3Store = create<Web3StoreProps>()(
  persist(
    (set, get) => {
      return {
        isSwitchingChain: false,
        isTestnet: false,
        tokens: [],
        supportedChains,
        chain: defaultChain,
        contract: {} as ContractAddressConfig,
        enabled: false,
        token: {} as TokenAddressConfig,

        setIsTestnet(isTestnet) {
          set({ isTestnet })
        },
        setEnabled(enabled) {
          set({ enabled })
        },

        setToken(token) {
          set({ token })
        },

        setTokens(tokens) {
          set({ tokens })
        },
        setChain(chain) {
          set({ chain })
        },
        setContract(contract) {
          set({ contract })
        },
        setSupportedChains(supportedChains) {
          set({ supportedChains })
        },
        setIsSwitchingChain(isSwitchingChain) {
          set({ isSwitchingChain })
        },
      }
    },
    {
      name: storageKeys.web3,
      partialize(state) {
        return {
          token: state.token,
          tokens: state.tokens,
          contract: state.contract,
          chain: state.chain,
          supportedChains: state.supportedChains,
        }
      },
    },
  ),
)
