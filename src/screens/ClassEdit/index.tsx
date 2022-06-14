import { useForm } from 'react-hook-form'
import { StatusBar } from 'expo-status-bar'
import { Feather } from '@expo/vector-icons'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ControlledInput from '../../components/ControlledInput'
import DateTimePicker from '@react-native-community/datetimepicker'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {
  useTheme,
  useToast,
  VStack,
  HStack,
  FormControl,
  Center,
  Text,
  Spinner,
  KeyboardAvoidingView,
  Button,
} from 'native-base'
import ControlledDatePicker from '../../components/ControlledDatePicker'

type ClassEditProps = NativeStackScreenProps<RootStackParamList, 'ClassEdit'>

const ClassEdit = ({ navigation, route }: ClassEditProps) => {
  const [gymClass, setGymClass] = useState<Class>()
  const {
    control,
    handleSubmit,
    watch,
    setError,
    getValues,
    setValue,
    formState: { errors },
  } = useForm()
  const toast = useToast()

  const { colors } = useTheme()
  const { classId } = route.params
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

  const handleEdit = () => {
    axios
      .patch(`https://switch-gym.herokuapp.com/api/gym_classes/${classId}`, {
        ...getValues(),
        start_time: getValues().start_time,
        duration: getValues().duration,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.show({
            title: 'Alterações salvas com sucesso!',
            backgroundColor: colors.success[500],
            placement: 'top',
            style: { marginTop: 16 },
          })
        }
        if (res.status === 400) {
          setError('invalidEdit', {
            type: 'custom',
            message: 'Ocorreu um erro salvar as alteracoes',
          })
        }
      })
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
          <VStack justifyContent="center" space="3">
            <ControlledInput
              textColor="black"
              control={control}
              label="Nome da aula"
              name="name"
              errorMessage={errors.name?.message}
              defaultValue={gymClass?.name}
            />
            <ControlledInput
              textColor="black"
              control={control}
              label="Descrição da aula"
              name="description"
              errorMessage={errors.description?.message}
              defaultValue={gymClass?.description}
            />
            <ControlledInput
              textColor="black"
              control={control}
              label="Professor"
              name="teacher_name"
              errorMessage={errors.teacher_name?.message}
              defaultValue={gymClass?.teacher_name}
            />
            <ControlledInput
              textColor="black"
              control={control}
              label="Duração (segundos)"
              name="duration"
              errorMessage={errors.duration?.message}
              defaultValue={
                gymClass.duration !== null ? gymClass?.duration.toString() : ''
              }
            />
            <ControlledDatePicker
              textColor="black"
              control={control}
              label="Dia da aula"
              name="class_day"
              mode="date"
              errorMessage={errors.class_day?.message}
              defaultValue={gymClass?.start_time}
              setValue={setValue}
            />
            <ControlledDatePicker
              textColor="black"
              control={control}
              label="Horário de início"
              name="start_time"
              mode="time"
              errorMessage={errors.start_time?.message}
              defaultValue={gymClass?.start_time}
              setValue={setValue}
            />
            {errors.invalidEdit && (
              <Text mt="4" color={colors.error[500]}>
                {errors.invalidEdit.message}
              </Text>
            )}
          </VStack>
          <HStack space="8" width="full" mb="8">
            <Button
              borderWidth={1}
              borderColor={colors.error[500]}
              backgroundColor={colors.white}
              onPress={() => navigation.goBack()}
            >
              <Text color={colors.error[500]}>Cancelar</Text>
            </Button>
            <Button flex={1} onPress={() => handleEdit()}>
              Salvar
            </Button>
          </HStack>
        </KeyboardAvoidingView>
      )}
    </>
  )
}

export default ClassEdit
