import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Feather } from '@expo/vector-icons'
import { login } from '../../services/api'
import BackgroundImage from '../../components/BackgroundImage'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import ControlledInput from '../../components/ControlledInput'
import {
  useTheme,
  Box,
  Text,
  Spinner,
  Icon,
  Button,
  KeyboardAvoidingView,
  IconButton,
} from 'native-base'
import ControlledSelect from '../../components/ControlledSelect'

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>

const SignUp = ({ navigation }: SignUpProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const { colors } = useTheme()
  const [showPassword, setShowPassword] = useState(false)
  let [role, setRole] = React.useState('')
  const {
    control,
    handleSubmit,
    watch,
    setError,
    getValues,
    formState: { errors },
  } = useForm()

  const handleSignUp = async () => {
    setIsLoading(true)
    const response = await fetch('https://switch-gym.herokuapp.com/api/users', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        user: getValues(),
      }),
    })
    if (response.status === 201) {
      ;(await login(getValues()))
        ? navigation.navigate('ClassList')
        : setError('invalidLogin', {
            type: 'custom',
            message:
              'Ocorreu um erro ao fazer o login, tente novamente mais tarde',
          })
    } else {
      console.log(getValues())

      setError('invalidSignUp', {
        type: 'custom',
        message: 'Ocorreu um erro ao fazer o cadastro, revise os campos',
      })
    }

    setIsLoading(false)
  }

  return (
    <BackgroundImage screen="Sign up">
      <KeyboardAvoidingView h={{ base: '400px' }} flex={1} behavior="height">
        <Box
          px={6}
          pt={4}
          pb={8}
          style={{
            flex: 1,
            justifyContent: 'space-between',
          }}
        >
          <Box alignItems="flex-start">
            <IconButton
              borderRadius="full"
              mb="4"
              onPress={() => navigation.goBack()}
              icon={
                <Icon
                  as={<Feather name="chevron-left" />}
                  size={6}
                  color={colors.muted[100]}
                />
              }
            />
            <Text fontSize="3xl" color={colors.muted[100]} fontWeight="bold">
              Cadastre-se como aluno, professor ou administrador{' '}
            </Text>
          </Box>
          <Box width="full" alignItems="center">
            <ControlledInput
              control={control}
              label="Nome"
              name="name"
              errorMessage={errors.name?.message}
              InputLeftElement={
                <Icon
                  as={<Feather name="user" size={20} />}
                  size={5}
                  ml={2}
                  color={colors.primary[400]}
                />
              }
            />
            <ControlledInput
              control={control}
              label="Email"
              name="email"
              errorMessage={errors.email?.message}
              InputLeftElement={
                <Icon
                  as={<Feather name="mail" size={20} />}
                  size={5}
                  ml={2}
                  color={colors.primary[400]}
                />
              }
            />
            <ControlledInput
              control={control}
              label="Senha"
              name="password"
              errorMessage={errors.password?.message}
              type={showPassword ? 'text' : 'password'}
              InputLeftElement={
                <Icon
                  as={<Feather name="lock" size={20} />}
                  size={5}
                  ml={2}
                  color={colors.primary[400]}
                />
              }
              InputRightElement={
                <Icon
                  as={<Feather name={showPassword ? 'eye' : 'eye-off'} />}
                  size={5}
                  mr="2"
                  color="muted.400"
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
            />
            <ControlledSelect
              control={control}
              label="Cargo"
              name="role"
              errorMessage={errors.role?.message}
            />
            {errors.invalidSignUp && (
              <Text mt="4" color={colors.error[500]}>
                {errors.invalidSignUp.message}
              </Text>
            )}
          </Box>
          <Button width="full" onPress={() => handleSignUp()}>
            {isLoading ? (
              <Spinner color={colors.primary[200]} />
            ) : (
              <Text color={colors.white}>Cadastrar</Text>
            )}
          </Button>
        </Box>
      </KeyboardAvoidingView>
    </BackgroundImage>
  )
}

export default SignUp
