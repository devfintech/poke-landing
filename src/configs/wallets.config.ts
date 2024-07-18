import { HOST } from "./host.config"

export enum ConnectorIds {
  Injected = "injected",
  WalletConnect = "walletConnect",
  Okxwallet = "okxwallet",
}

export interface Wallet {
  injected: boolean
  name: string
  connectorId: ConnectorIds
  etherId: string
  mobileOnly: boolean
  iconURI: string
  downloadUrl: string
  deepLink: string
}

export const wallets: Wallet[] = [
  {
    injected: true,
    name: "Injected",
    connectorId: ConnectorIds.Injected,
    etherId: "",
    mobileOnly: false,
    iconURI: "/images/walletsinjected.png",
    downloadUrl: "",
    deepLink: "",
  },
  {
    injected: false,
    name: "MetaMask",
    connectorId: ConnectorIds.Injected,
    etherId: "isMetaMask",
    mobileOnly: false,
    iconURI: "/images/walletsmetamask.png",
    downloadUrl: "https://metamask.io/download/",
    deepLink: `https://metamask.app.link/dapp/${HOST}`,
  },
  {
    injected: false,
    name: "OKX Wallet",
    connectorId: ConnectorIds.Injected,
    etherId: "okxwallet",
    mobileOnly: false,
    iconURI: "/images/walletsokx.jpg",
    downloadUrl: "https://www.okx.com/web3",
    deepLink: `okx://wallet/dapp/details?dappUrl=https://tokenswap.finance/`,
  },
  {
    injected: false,
    name: "Opera Wallet",
    connectorId: ConnectorIds.Injected,
    etherId: "isOpera",
    mobileOnly: false,
    iconURI: "/images/walletsopera.png",
    downloadUrl: "https://www.opera.com/crypto/next",
    deepLink: "",
  },
  // {
  //   injected: false,
  //   name: "MathWallet",
  //   connectorId: ConnectorIds.Injected,
  //   etherId: "isMathWallet",
  //   mobileOnly: false,
  //   iconURI: "/images/walletsmathwallet.png",
  //   downloadUrl: "https://mathwallet.org/",
  //   deepLink: `mathwallet://mathwallet.org?action=link&value=${HOST}`,
  // },
  // {
  //   injected: false,
  //   name: "SafePal",
  //   connectorId: ConnectorIds.Injected,
  //   etherId: "isSafePal",
  //   mobileOnly: false,
  //   iconURI: "/images/walletssafepal.png",
  //   downloadUrl: "https://safepal.io/download",
  //   deepLink: "",
  // },
  // {
  //   injected: false,
  //   name: "TokenPocket",
  //   connectorId: ConnectorIds.Injected,
  //   etherId: "isTokenPocket",
  //   mobileOnly: false,
  //   iconURI: "/images/walletstokenpocket.png",
  //   downloadUrl: "https://www.tokenpocket.pro/",
  //   deepLink: `https://tokenpocket.github.io/applink?dappUrl=${HOST}`,
  // },
  {
    injected: false,
    name: "Coin98",
    connectorId: ConnectorIds.Injected,
    etherId: "isCoin98",
    mobileOnly: false,
    iconURI: "/images/walletscoin98.png",
    downloadUrl: "https://coin98.net/",
    deepLink: "",
  },
  {
    injected: false,
    name: "Trust Wallet",
    connectorId: ConnectorIds.Injected,
    etherId: "isTrust",
    mobileOnly: true,
    iconURI: "/images/walletstrustwallet.png",
    downloadUrl: "https://trustwallet.com/",
    deepLink: `https://link.trustwallet.com/open_url?coin_id=714&url=${HOST}`,
  },
  // {
  //   injected: false,
  //   name: "Rice Wallet",
  //   connectorId: ConnectorIds.Injected,
  //   etherId: "isRiceWallet",
  //   mobileOnly: true,
  //   iconURI: "/images/walletsricewallet.png",
  //   downloadUrl: "https://ricewallet.io/",
  //   deepLink: "",
  // },
  {
    injected: false,
    name: "Wallet Connect",
    connectorId: ConnectorIds.WalletConnect,
    etherId: "",
    mobileOnly: false,
    iconURI: "/images/walletswalletconnect.png",
    downloadUrl: "",
    deepLink: "",
  },
]
