import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {
  useTheme,
  VStack,
  HStack,
  FormControl,
  Center,
  Text,
  Input,
  TextArea,
  Spinner,
  KeyboardAvoidingView,
  Button,
} from 'native-base'

type ClassEditProps = NativeStackScreenProps<RootStackParamList, 'ClassEdit'>

const ClassEdit = ({ navigation, route }: ClassEditProps) => {
  const [date, setDate] = useState(new Date(1598051730000))
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate
    setShow(false)
    setDate(currentDate)
  }

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode('date')
  }

  const showTimepicker = () => {
    showMode('time')
  }

  const { colors } = useTheme()
  const { classId } = route.params
  const [gymClass, setGymClass] = useState<Class>()
  const [isLoading, setIsLoading] = useState(true)

  const getGymClass = async () => {
    try {
      const response = await fetch(
        `https://switch-gym.herokuapp.com/api/gym_classes/${classId}`
      )
      const json = await response.json()
      setGymClass(json)
    } catch (error) {
      console.warn(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getGymClass()
  }, [])

  return (
    <>
      <StatusBar style="dark" />
      {isLoading ? (
        <Center size="full">
          <Spinner size="lg" />
        </Center>
      ) : (
        <KeyboardAvoidingView
          flex={1}
          backgroundColor={colors.white}
          justifyContent="space-between"
          py="12"
          px="6"
          behavior="padding"
          keyboardVerticalOffset={-200}
        >
          <VStack justifyContent="center" space="4">
            <FormControl>
              <Input
                color={colors.muted[800]}
                size="md"
                placeholder="Nome da aula"
                value={gymClass?.name}
              />
            </FormControl>
            <FormControl>
              <TextArea
                color={colors.muted[800]}
                size="md"
                placeholder="Descrição da aula"
                value={gymClass?.description}
              />
            </FormControl>
            <FormControl>
              <Input
                color={colors.muted[800]}
                size="md"
                placeholder="Nome do professor"
                value={gymClass?.teacher_name}
              />
            </FormControl>
            <FormControl>
              <Input
                color={colors.muted[800]}
                size="md"
                placeholder="Dia da aula"
                onPressIn={showDatepicker}
                value={date.toDateString()}
              />
            </FormControl>
            <FormControl>
              <Input
                color={colors.muted[800]}
                size="md"
                placeholder="Horário de início"
                onPressIn={showTimepicker}
                value={date.toTimeString()}
              />
            </FormControl>
            <FormControl>
              <Input
                color={colors.muted[800]}
                size="md"
                placeholder="Duração"
              />
            </FormControl>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </VStack>
          <HStack space="8" width="full" mb="8">
            <Button
              borderWidth={1}
              borderColor={colors.error[500]}
              backgroundColor={colors.white}
            >
              <Text color={colors.error[500]}>Cancelar</Text>
            </Button>
            <Button flex={1} onPress={() => navigation.navigate('ClassList')}>
              Salvar
            </Button>
          </HStack>
        </KeyboardAvoidingView>
      )}
    </>
  )
}

export default ClassEdit
