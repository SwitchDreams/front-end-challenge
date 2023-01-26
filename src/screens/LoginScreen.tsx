import React, {useState} from "react"
import {
  Heading,
  Center,
  Box,
  VStack,
  Button,
  Link,
  IInputProps,
} from "native-base"
import {InputFormEmail, InputFormPassword} from "../components/InputForm";
import {useNavigation} from "@react-navigation/native";



export default function LoginScreen({ ...rest }: IInputProps) {
  const navigation = useNavigation();

  function handleHomeTest() {
    navigation.navigate("Aulas")
  }

  function handleSignUp() {
    navigation.navigate("SignUp")
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

      <InputFormEmail />
      <InputFormPassword />

      <VStack space={3} mt="5" >
        <Button mt="2" colorScheme="indigo">
          Entrar
        </Button>
          <Link mt="6" justifyContent="center" _text={{
            color: "indigo.400",
            fontWeight: "medium",
            fontSize: "sm"
          }} onPress={handleSignUp}>
            Ainda não tem uma conta? Cadastre-se!
          </Link>
        <Button mt="2" colorScheme="indigo" onPress={handleHomeTest}>
          Home test
        </Button>
      </VStack>
    </Box>
  </Center>
  )
}
