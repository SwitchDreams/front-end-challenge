import React from 'react'
import { Controller } from 'react-hook-form'
import { useTheme, Select, FormControl, IInputProps } from 'native-base'

import { ControllerProps } from 'react-hook-form'

type ControlledSelectProps = ControllerProps &
  IInputProps & {
    label: string
  }

const ControlledSelect = ({
  control,
  label,
  name,
  errorMessage,
}: ControlledSelectProps) => {
  const { colors } = useTheme()

  return (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>
      <Controller
        control={control}
        render={({ field }) => (
          <Select
            size="md"
            selectedValue={field.value}
            color={colors.muted[100]}
            placeholder={label}
            _selectedItem={{
              bg: colors.primary[200],
            }}
            onValueChange={(itemValue) => field.onChange(itemValue)}
          >
            <Select.Item label="Aluno" value="customer" />
            <Select.Item label="Professor" value="teacher" />
            <Select.Item label="Administrador" value="admin" />
          </Select>
        )}
        name={name}
        defaultValue=""
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  )
}

export default ControlledSelect
