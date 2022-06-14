import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import DateTimePicker from '@react-native-community/datetimepicker'

import { FormControl, Input, IInputProps } from 'native-base'

import { ControllerProps } from 'react-hook-form'

type ControlledDatePickerProps = ControllerProps &
  IInputProps & {
    label: string
    textColor?: string
    mode: 'date' | 'time'
    date: string
    setDate: () => void
  }

const ControlledDatePicker = ({
  control,
  label,
  name,
  InputLeftElement,
  InputRightElement,
  errorMessage,
  mode,
  defaultValue = '',
  textColor = 'white',
  setValue,
}: ControlledDatePickerProps) => {
  const [date, setDate] = useState(new Date(defaultValue))
  const [show, setShow] = useState(false)

  return (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>
      <Controller
        control={control}
        render={({ field }) => (
          <>
            <Input
              showSoftInputOnFocus={false}
              color={textColor}
              size="md"
              onBlur={field.onBlur}
              placeholder={label}
              value={
                mode === 'date'
                  ? new Date(date).toLocaleDateString()
                  : new Date(date).toLocaleTimeString()
              }
              InputLeftElement={InputLeftElement}
              InputRightElement={InputRightElement}
              onPressIn={() => setShow(true)}
            />
          </>
        )}
        name={name}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={(event, value) => {
            setShow(false)
            setValue('start_time', value)
            setDate(value)
          }}
        />
      )}
    </FormControl>
  )
}

export default ControlledDatePicker
