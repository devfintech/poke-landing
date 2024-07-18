import { InputRef } from "antd"
import { forwardRef } from "react"

import { Input, InputProps } from "."

export interface InputNumberProps extends Omit<InputProps, "type"> {
  // onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void
  maxDecimals?: number
  maxInteger?: number
}

export const InputNumber = forwardRef<InputRef, InputNumberProps>(
  ({ maxDecimals = 8, maxInteger = 12, onChange = (e) => {}, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        {...props}
        type="text"
        onChange={(e) => {
          const newValue = transformToNumber({ value: e.target.value, maxDecimals, maxInteger })
          e.target.value = newValue
          e.currentTarget.value = newValue
          onChange && onChange(e)
        }}
      />
    )
  },
)
InputNumber.displayName = "InputNumber"

const transformToNumber = (
  { value, maxDecimals = 6, maxInteger = 12 }: { value: string; maxDecimals?: number; maxInteger?: number } = {
    value: "",
  },
): string => {
  const transformComma = value.replace(/,/g, ".")

  let pattern = `^\\d{1,${maxInteger}}(\\.(\\d{1,${maxDecimals}})?)?`

  if (maxDecimals === 0) {
    pattern = `^\\d{1,${maxInteger}}`
  }

  const regex = new RegExp(pattern, "g")

  const newValue = transformComma.match(regex)?.[0] || ""

  return newValue
}
