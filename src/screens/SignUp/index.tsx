import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import BackgroundImage from '../../components/BackgroundImage'
import {
  useTheme,
  Box,
  FormControl,
  Text,
  Input,
  Select,
  Icon,
  Button,
  KeyboardAvoidingView,
  IconButton,
} from 'native-base'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { color } from 'native-base/lib/typescript/theme/styled-system'
import { Colors } from 'react-native/Libraries/NewAppScreen'

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>

const SignUp = ({ navigation }: SignUpProps) => {
  const { colors } = useTheme()
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false)
  let [role, setRole] = React.useState('')

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

          <Box mb="1/3" width="full" alignItems="center">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input color={colors.muted[100]} size="md" placeholder="Email" />
            </FormControl>
            <FormControl>
              <FormControl.Label>Senha</FormControl.Label>
              <Input
                type={showPassword ? 'text' : 'password'}
                color={colors.muted[100]}
                size="md"
                placeholder="Senha"
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
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirmação Senha</FormControl.Label>
              <Input
                type={showPasswordConfirmation ? 'text' : 'password'}
                color={colors.muted[100]}
                size="md"
                placeholder="Confirme sua senha"
                InputRightElement={
                  <Icon
                    as={
                      <Feather
                        name={showPasswordConfirmation ? 'eye' : 'eye-off'}
                      />
                    }
                    size={5}
                    mr="2"
                    color="muted.400"
                    onPress={() =>
                      setShowPasswordConfirmation(!showPasswordConfirmation)
                    }
                  />
                }
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Cargo</FormControl.Label>
              <Select
                size="md"
                selectedValue={role}
                color={colors.muted[400]}
                placeholder="Escolha um cargo"
                _selectedItem={{
                  bg: colors.primary[200],
                }}
                onValueChange={(itemValue) => setRole(itemValue)}
              >
                <Select.Item label="Aluno" value="customer" />
                <Select.Item label="Professor" value="teacher" />
                <Select.Item label="Administrador" value="admin" />
              </Select>
            </FormControl>
          </Box>
          <Button width="full">Cadastrar</Button>
        </Box>
      </KeyboardAvoidingView>
    </BackgroundImage>
  )
}

export default SignUp
