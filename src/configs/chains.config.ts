import { Chain } from "wagmi"
import { base, baseGoerli, bsc, bscTestnet, fantom, fantomTestnet, goerli, mainnet } from "wagmi/chains"

import { ENV, Env } from "./env.config"

const ChainConfig = <const>{
  [Env.development]: goerli,
  [Env.staging]: base,
  [Env.production]: base,
}

const supportedChainsConfig = {
  [Env.development]: [baseGoerli, base, bsc, bscTestnet, goerli],
  [Env.staging]: [baseGoerli, base, mainnet, bsc, bscTestnet, fantom, fantomTestnet],
  [Env.production]: [base],
}

export const supportedChains: Chain[] = supportedChainsConfig[ENV]

export const defaultChain = ChainConfig[ENV]
