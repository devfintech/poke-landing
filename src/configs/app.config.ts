import { Theme } from "@/types/core.type"

export const appConfig = {
  // Link register wallet connect project id
  walletConnectProjectId: "735cc2a0a2d1c09241353051def96672", // Get id in here: https://cloud.walletconnect.com/
  // Config version
  version: "0.0",
  // Config default theme
  theme: "dark" as Theme,
  // Config sign message wallet to backend
  signMessage: "A8 NFT LAUNCHPAD SIGN",
} as const
