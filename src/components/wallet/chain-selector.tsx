import { Dropdown, MenuProps } from "antd"
import { FC } from "react"
import { BiChevronDown } from "react-icons/bi"
import { BsCheckLg } from "react-icons/bs"
import { HiGlobe } from "react-icons/hi"

import { supportedChains } from "@/configs/chains.config"
import { useChainSetup } from "@/hooks/wallet/use-chain-setup"
import { Button } from "@/libs/ui/button"

export const ChainSelector: FC = () => {
  const { chainStore, chains, selectChain, isSwitchingChain } = useChainSetup()

  const items: MenuProps["items"] = chains.map((chainItem) => {
    return {
      key: chainItem.id,
      label: (
        <div className="flex items-center gap-2">
          {chainItem.name}
          {chainStore?.id === chainItem?.id && <BsCheckLg className="text-success-500" />}
        </div>
      ),
      icon: <HiGlobe />,
      className: "",
      onClick: () => {
        if (chainStore?.id === chainItem?.id) return
        selectChain(chainItem)
      },
    }
  })

  if (supportedChains.length <= 1) return null

  return (
    <Dropdown menu={{ items }} disabled={isSwitchingChain}>
      <Button className="gap-2 px-2" type="default" loading={isSwitchingChain}>
        <HiGlobe />
        {chainStore?.name}
        <BiChevronDown className="text-xl" />
      </Button>
    </Dropdown>
  )
}
