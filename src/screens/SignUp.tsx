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
  Select,
  VStack
} from "native-base";
import {InputFormPassword} from "../components/InputForm";
import {Feather} from "@expo/vector-icons";

export default function SignUp() {
  const [service, setService] = useState("")
  const [show, setShow] = useState(false)
    return (
      <Center flex={1}>
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading size="lg" color="coolGray.800" _dark={{
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
            <FormControl>
              <FormControl.Label>Nome</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>Senha</FormControl.Label>
              <Input
                type={show ? "text" : "password"}
                InputRightElement={<Pressable onPress={() => setShow(!show)}>
                <Icon as={<Feather name={show ? "eye" : "eye-off"} />} size={5} mr="2" color="muted.400" />
                </Pressable>}/>
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirme sua senha</FormControl.Label>
              <Input
                type={show ? "text" : "password"}
                InputRightElement={<Pressable onPress={() => setShow(!show)}>
                  <Icon as={<Feather name={show ? "eye" : "eye-off"} />} size={5} mr="2" color="muted.400" />
                </Pressable>}/>
            </FormControl>
            <Box maxW="300">
              <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />
              }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                <Select.Item label="Aluno" value="aluno" />
                <Select.Item label="Professor" value="professor" />
                <Select.Item label="Administrador" value="admin" />
              </Select>
            </Box>
            <Button mt="2" colorScheme="indigo">
              Cadastrar-se
            </Button>
          </VStack>
        </Box>
      </Center>
    );
}
