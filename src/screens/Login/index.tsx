import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Logo from '../../../assets/logo.svg'
import { Feather } from '@expo/vector-icons'
import { login } from '../../services/api'
import ControlledInput from '../../components/ControlledInput'
import BackgroundImage from '../../components/BackgroundImage'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import {
  useTheme,
  Box,
  Text,
  Link,
  Icon,
  Button,
  KeyboardAvoidingView,
  Spinner,
} from 'native-base'

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>

const Login = ({ navigation }: LoginProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const { colors } = useTheme()
  const [show, setShow] = useState(false)
  const {
    control,
    handleSubmit,
    watch,
    setError,
    getValues,
    formState: { errors },
  } = useForm()

  const handleLogin = async () => {
    setIsLoading(true)
    ;(await login(getValues()))
      ? navigation.navigate('ClassList')
      : setError('invalidLogin', {
          type: 'custom',
          message: 'Email ou senha incorretos!',
        })
    setIsLoading(false)
  }

  return (
    <BackgroundImage screen="Login">
      <KeyboardAvoidingView h={{ base: '400px' }} flex={1} behavior="height">
        <Box
          px={6}
          pb={8}
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Logo width={130} />
            <Text
              fontSize="3xl"
              color={colors.primary[100]}
              fontWeight="bold"
              textAlign="center"
            >
              Switch{'\n'}Gym
            </Text>
          </Box>
          <Text color={colors.muted[100]} fontSize="lg" textAlign="center">
            Dê um switch no seu estilo de vida{'\n'}com a academia que faz
            acontecer
          </Text>
          <Box mb="1/3" width="full" alignItems="center">
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
              errorMessage={errors.email?.message}
              type={show ? 'text' : 'password'}
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
                  as={<Feather name={show ? 'eye' : 'eye-off'} />}
                  size={5}
                  mr="2"
                  color="muted.400"
                  onPress={() => setShow(!show)}
                />
              }
            />

            {errors.invalidLogin && (
              <Text mt="4" color={colors.error[500]}>
                {errors.invalidLogin.message}
              </Text>
            )}
            <Link
              mt={4}
              _text={{ color: colors.primary[100] }}
              onPress={() => navigation.navigate('SignUp')}
            >
              Não possui conta? Clique aqui!
            </Link>
          </Box>
          <Button width="full" onPress={() => handleLogin()}>
            {isLoading ? (
              <Spinner color={colors.primary[200]} />
            ) : (
              <Text color={colors.white}>Login</Text>
            )}
          </Button>
        </Box>
      </KeyboardAvoidingView>
    </BackgroundImage>
  )
}

export default Login
