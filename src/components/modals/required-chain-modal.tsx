import { FC, useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useNetwork } from "wagmi"

import { useActive } from "@/hooks/wallet/use-active"
import { useChainSetup } from "@/hooks/wallet/use-chain-setup"
import { Button } from "@/libs/ui/button"
import { Modal } from "@/libs/ui/modal"
import { WarningFilled } from "@ant-design/icons"

interface RequiredChainModalProps {}

export const RequiredChainModal: FC<RequiredChainModalProps> = () => {
  const { disconnect } = useActive()
  const { chain } = useNetwork()
  const { chainStore, chains, isSwitchingChain, selectChain } = useChainSetup()

  const [isOpenModal, setIsOpenModal] = useState(false)

  const [searchParams] = useSearchParams()

  const chainId = Number(searchParams.get("chain_id"))
  const chainSelectedInParam = chains.find((supportedChain) => supportedChain.id === chainId)

  const isWrongChain = useMemo(() => {
    if (!chainId || !chain) return false

    if (!chainSelectedInParam) return false

    return chainId !== chain.id
  }, [chain, chainId, chainSelectedInParam])

  const isUnsupportedChain = chain?.unsupported === true

  useEffect(() => {
    if (isWrongChain || isUnsupportedChain) {
      setIsOpenModal(true)
    } else {
      setIsOpenModal(false)
    }
  }, [isUnsupportedChain, isWrongChain])

  return (
    <>
      {isOpenModal && (
        <Modal
          className="border-cool-400 rounded-lg border"
          open={isOpenModal}
          width={400}
          title="Switch network"
          closable={false}
        >
          <div className="">
            <div className="my-4 flex flex-col items-center justify-center gap-4">
              <WarningFilled className="text-warning-500 animate-pulse text-6xl" />
              <p className="text-warning text-lg font-medium">You are in wrong network</p>
            </div>

            <div className="flex w-full items-center justify-center gap-3">
              <Button
                className="flex-1"
                loading={isSwitchingChain}
                type="primary"
                onClick={() => {
                  if (isUnsupportedChain) {
                    selectChain(chainStore)
                  } else {
                    selectChain(chainSelectedInParam || chainStore)
                  }
                }}
              >
                Switch network
              </Button>
              <Button className="flex-1" type="dashed" onClick={disconnect}>
                Disconnect
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
