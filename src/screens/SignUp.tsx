import React, {useState} from "react";
import {
  Box,
  Button,
  Center,
  CheckIcon,
  FormControl,
  Heading,
  Icon,
  Input,
  Pressable,
  ScrollView,
  Select,
  VStack
} from "native-base";
import {Feather} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {InputBase} from "../components/InputBase";
import {Controller, useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import {api} from "../service/api";
import {useAuth} from "../hooks/useAuth";

type FormDataProps = {
  name: string;
  email: string;
  password: string;

  role: string;
  password_confirm: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome.'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido.'),
  password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 dígitos.'),
  password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password'), null], 'A confirmação da senha não confere')
});

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [service, setService] = useState("");

  const { signIn } = useAuth();

  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSignUp({ email, password, role }: FormDataProps) {
    try {
      setIsLoading(true)

      await api.post('/users', { email, password, role });
      await signIn(email, password)
    } catch (error) {
      setIsLoading(false);
    }
  }
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <Box safeArea flex={1}>
        <Icon as={Feather} name="chevron-left" size="2xl" ml="2" mt={2} color="coolGray.400" onPress={handleGoBack}/>
        <Center>
          <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Heading size="2xl" color="coolGray.800" _dark={{
              color: "warmGray.50"
            }} fontWeight="semibold">
            Cadastre-se
            </Heading>
            <Heading mt="1" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="medium" size="xs">
              Crie uma conta para continuar
            </Heading>
            <VStack space={3} mt="5">
              <Controller
                  control={control}
                  name="name"
                  render={({ field: { onChange, value } }) => (
                    <InputBase
                      placeholder="Nome"
                      onChangeText={onChange}
                      value={value}
                      errorMessage={errors.name?.message}
                    />
                  )}
              />
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <InputBase
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.email?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <InputBase
                    placeholder="Senha"
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.password?.message}
                    type={show ? "text" : "password"}
                    InputRightElement={<Pressable onPress={() => setShow(!show)}>
                    <Icon as={<Feather name={show ? "eye" : "eye-off"} />} size={5} mr="2" color="muted.400" />
                    </Pressable>}/>
                  )}
              />
              <Controller
                control={control}
                name="password_confirm"
                render={({ field: { onChange, value } }) => (
                  <InputBase
                    placeholder="Confirme sua senha"
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.password_confirm?.message}
                    type={show ? "text" : "password"}
                    InputRightElement={<Pressable onPress={() => setShow(!show)}>
                      <Icon as={<Feather name={show ? "eye" : "eye-off"} />} size={5} mr="2" color="muted.400" />
                    </Pressable>}/>
                )}
              />
              <Box maxW="300">
                <Select selectedValue={service} bg="purple.100" minWidth="200" accessibilityLabel="Choose Service" placeholder="Escolha o tipo de conta" _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />
                }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                  <Select.Item label="Aluno" value="aluno" />
                  <Select.Item label="Professor" value="professor" />
                  <Select.Item label="Administrador" value="admin" />
                </Select>
              </Box>
              <Button mt="2" colorScheme="purple" onPress={handleSubmit(handleSignUp)} isLoading={isLoading}>
                Cadastrar-se
              </Button>
            </VStack>
          </Box>
        </Center>
        </Box>
      </ScrollView>
    );
}
