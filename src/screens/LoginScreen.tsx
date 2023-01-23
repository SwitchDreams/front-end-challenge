import React, {useState} from "react"
import {
  Heading,
  Center,
  Box,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Text,
  Link,
  IInputProps
} from "native-base"
import { Feather } from "@expo/vector-icons"

export default function LoginScreen() {
  const [show, setShow] = useState(false)
  return <Center w="100%">
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
        Switch Gym
      </Heading>
      <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
        Entre para mudar seu estilo de vida!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <Input />
        </FormControl>
        <FormControl>
          <Input type="password" />
        </FormControl>
        <Button mt="2" colorScheme="indigo">
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
            I'm a new user.{" "}
          </Text>
          <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  </Center>
}
