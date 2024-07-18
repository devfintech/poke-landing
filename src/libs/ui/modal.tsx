import { cn } from "@/utils/classnames"
import { Modal as AntModal, ModalProps as AntModalProps } from "antd"
import { FC } from "react"

interface ModalProps extends AntModalProps {}

export const Modal: FC<ModalProps> = ({ children, ...props }) => {
  return (
    <AntModal
      footer={false}
      destroyOnClose
      {...props}
      classNames={{
        header: cn(""),
        body: cn(""),
        content: cn("!rounded-xl"),
        footer: cn(""),
        mask: cn(""),
        ...props?.classNames,
      }}
      className={cn("pb-0", props.className)}
    >
      {children}
    </AntModal>
  )
}
