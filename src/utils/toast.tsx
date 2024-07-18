import { ToastOptions, toast } from "react-toastify"

import { ToastComponent, ToastComponentProps } from "@/libs/ui/toast-component"

export const toastContent = ({ message, type, title }: ToastComponentProps, options?: ToastOptions) => {
  return toast(<ToastComponent type={type} message={message} title={title} />, {
    closeButton: true,
    hideProgressBar: false,
    ...options,
  })
}
