import React from 'react'
import { Controller } from 'react-hook-form'
import {
  useTheme,
  Box,
  FormControl,
  Text,
  Input,
  Link,
  Icon,
  Button,
  KeyboardAvoidingView,
  IInputProps,
} from 'native-base'

import { ControllerProps } from 'react-hook-form'

type ControlledInputProps = ControllerProps &
  IInputProps & {
    label: string
    textColor: string
  }

const ControlledInput = ({
  control,
  label,
  name,
  InputLeftElement,
  InputRightElement,
  errorMessage,
  type = 'text',
  defaultValue = '',
  textColor = 'white',
}: ControlledInputProps) => {
  const { colors } = useTheme()

  return (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>
      <Controller
        control={control}
        render={({ field }) => (
          <Input
            type={type}
            color={textColor}
            size="md"
            onBlur={field.onBlur}
            placeholder={label}
            onChangeText={(val) => field.onChange(val)}
            value={field.value}
            InputLeftElement={InputLeftElement}
            InputRightElement={InputRightElement}
          />
        )}
        name={name}
        defaultValue={defaultValue}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  )
}

export default ControlledInput
