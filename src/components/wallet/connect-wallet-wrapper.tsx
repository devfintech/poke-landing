import { jwtDecode } from "jwt-decode"
import { FC, ReactElement, cloneElement } from "react"

import { useAuth } from "@/hooks/core/use-auth"
import { useWeb3ModalActive } from "@/hooks/wallet/use-web3-modal-active"
import { Button, ButtonProps } from "@/libs/ui/button"
import { cn } from "@/utils/classnames"

interface ConnectWalletWrapperProps extends ButtonProps {
  children?: ReactElement
  className?: string
  requiredLogin?: boolean
  disconnectEnabled?: boolean
}

export const ConnectWalletWrapper: FC<ConnectWalletWrapperProps> = ({
  children,
  className,
  disconnectEnabled = false,
  requiredLogin = false,
  ...buttonProps
}) => {
  const { account, isConnecting, openWeb3Modal, closeWeb3Modal } = useWeb3ModalActive()
  const { token, login } = useAuth()

  const cloneButtonElement =
    children &&
    cloneElement(children, {
      ...(disconnectEnabled
        ? {
            onClick() {
              openWeb3Modal()
            },
          }
        : {}),
      ...buttonProps,
      className: cn(className, children.props?.className),
    })

  if (!account) {
    return (
      <Button
        className={className}
        type="primary"
        loading={isConnecting}
        onClick={() => openWeb3Modal()}
        {...buttonProps}
      >
        Connect Wallet
      </Button>
    )
  }

  if (requiredLogin) {
    const isInvalidToken = !token || jwtDecode<{ exp: number }>(token).exp * 1000 <= Date.now()

    if (isInvalidToken) {
      return (
        <Button className={className} type="primary" async onClick={login} {...buttonProps}>
          Sign Message
        </Button>
      )
    } else {
      return <>{cloneButtonElement}</>
    }
  }

  return <>{cloneButtonElement}</>
}
