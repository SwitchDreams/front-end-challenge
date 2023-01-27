import {Box, Button, Center, Heading, Icon, IInputProps, Link, Pressable, VStack} from "native-base";
import {useNavigation} from "@react-navigation/native";
import {AuthNavigatorRoutesProps} from "../routes/auth.routes";
import {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {InputBase} from "../components/InputBase";
import {Feather} from "@expo/vector-icons";
import {useAuth} from "../hooks/useAuth";



type FormData = {
  email: string;
  password: string;
}

export default function SignIn({ ...rest }: IInputProps) {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>()
  const [isLoading, setIsLoading] = useState(false)
  const { signIn } = useAuth();

  function handleSignUp() {
    navigation.navigate("signUp")
  }
  async function handleSignIn({ email, password }: FormData) {
    try {
      setIsLoading(true);
      await signIn(email, password);

    } catch (error) {
      setIsLoading(false);
    }
  }

  const [show, setShow] = useState(false)
  return (
  <Center flex={1}>
    <Box safeArea p="2" py="8" w="90%" maxW="350">
      <Heading size="4xl" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
        Switch Gym
      </Heading>
      <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="md">
        Entre para mudar seu estilo de vida!
      </Heading>
    <VStack space={2} mt="5" px={1}>
      <Controller
        control={control}
        name="email"
        rules={{ required: 'Informe o e-mail' }}
        render={({ field: { onChange } }) => (
          <InputBase
            placeholder="Email" size="xl"
            keyboardType={'email-address'}
            autoCapitalize="none"
            onChangeText={ onChange }
            errorMessage={errors.email?.message}
            InputLeftElement={
              <Icon as={Feather} name="user" size="sm" ml="2" color="coolGray.400" />}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{ required: 'Informe a senha' }}
        render={({ field: { onChange } }) => (
          <InputBase
            placeholder="Senha"
            size="xl"
            onChangeText={ onChange }
            errorMessage={errors.password?.message}
            InputLeftElement={
              <Icon as={Feather} name="lock" size="sm" ml="2" color="coolGray.400" />
            }
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon as={<Feather name={show ? "eye" : "eye-off"} />} size={5} mr="2" color="muted.400" />
              </Pressable>}
          />
        )}
      />
    </VStack>

      <VStack space={3} mt="5" >
        <Button mt="2" colorScheme="purple" onPress={handleSubmit(handleSignIn)} isLoading={isLoading}>
          Entrar
        </Button>
          <Link mt="6" justifyContent="center" _text={{
            color: "indigo.400",
            fontWeight: "medium",
            fontSize: "sm"
          }} onPress={handleSignUp}>
            Ainda não tem uma conta? Cadastre-se!
          </Link>
      </VStack>
    </Box>
  </Center>
  )
}
