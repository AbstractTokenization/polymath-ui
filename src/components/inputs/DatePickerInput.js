// @flow

import React from 'react'
import { DatePicker, DatePickerInput } from 'carbon-components-react'

type Props = {
  input: {
    name: string,
    [any]: any
  },
  label: string,
  meta: {
    touched: boolean,
    error: string
  },
  className: string,
  placeholder: string,
  [any]: any
}

export default ({
  input,
  label,
  meta: { touched, error },
  className,
  placeholder,
  ...rest
}: Props) => {
  const invalid = touched && !!error
  return (
    <DatePicker
      id={input.name}
      className={className}
      datePickerType='single'
      // eslint-disable-next-line
      onChange={(date: Date) => {
        input.onChange(date || null)
      }}
      {...rest}
    >
      <DatePickerInput
        labelText={label}
        placeholder={placeholder}
        id={input.name}
        invalid={invalid}
        invalidText={error}
        pattern={null}
      />
    </DatePicker>
  )
}
