import React, {useState} from "react"
import {
  Heading,
  Center,
  Box,
  VStack,
  Button,
  Link,
  IInputProps, Icon, Pressable,
} from "native-base"
import {useNavigation} from "@react-navigation/native";
import {InputBase} from "../components/InputBase";
import {Feather} from "@expo/vector-icons";



export default function LoginScreen({ ...rest }: IInputProps) {
  const navigation = useNavigation();

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
    <VStack space={2} mt="5" px={1}>
      <InputBase
        placeholder="Email" size="xl"
        InputLeftElement={
        <Icon as={Feather} name="user" size="sm" ml="2" color="coolGray.400" />}
      />
      <InputBase
        placeholder="Senha"
        size="xl"
        InputLeftElement={
          <Icon as={Feather} name="lock" size="sm" ml="2" color="coolGray.400" />
        }
        type={show ? "text" : "password"}
        InputRightElement={
        <Pressable onPress={() => setShow(!show)}>
          <Icon as={<Feather name={show ? "eye" : "eye-off"} />} size={5} mr="2" color="muted.400" />
        </Pressable>}
      />
    </VStack>

      <VStack space={3} mt="5" >
        <Button mt="2" colorScheme="purple">
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
