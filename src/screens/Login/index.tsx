import React, { useState } from 'react'
import Logo from '../../../assets/logo.svg'
import { Feather } from '@expo/vector-icons'
import BackgroundImage from '../../components/BackgroundImage'
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
} from 'native-base'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>

const Login = ({ navigation }: LoginProps) => {
  const { colors } = useTheme()
  const [show, setShow] = useState(false)

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
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                color={colors.muted[100]}
                size="md"
                placeholder="Email"
                InputLeftElement={
                  <Icon
                    as={<Feather name="mail" size={20} />}
                    size={5}
                    ml={2}
                    color={colors.primary[400]}
                  />
                }
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Senha</FormControl.Label>
              <Input
                type={show ? 'text' : 'password'}
                color={colors.muted[100]}
                size="md"
                placeholder="Senha"
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
            </FormControl>
            <Link
              mt={4}
              _text={{ color: colors.primary[100] }}
              onPress={() => navigation.navigate('SignUp')}
            >
              Não possui conta? Clique aqui!
            </Link>
          </Box>
          <Button width="full">Login</Button>
        </Box>
      </KeyboardAvoidingView>
    </BackgroundImage>
  )
}

export default Login