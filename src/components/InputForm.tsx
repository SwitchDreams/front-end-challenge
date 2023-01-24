import {
  FormControl,
  Icon,
  IInputProps,
  Input,
  Pressable,
  VStack,
}
from "native-base";
import {Feather} from "@expo/vector-icons";
import React, {useState} from "react";

export function InputFormEmail({ ...rest }: IInputProps) {
  const [show, setShow] = useState(false)

  return (
    <VStack space={3} mt="5" >
      <FormControl>
        <Input placeholder="Email" size="xl" InputLeftElement={
          <Icon as={Feather} name="user" size="sm" ml="2" color="coolGray.400" />
        }/>
      </FormControl>
    </VStack>
  )
}

export function InputFormPassword() {
  const [show, setShow] = useState(false)
  return (
    <VStack space={3} mt="5" >
      <FormControl>
        <Input placeholder="Senha" size="xl"
          InputLeftElement={
            <Icon as={Feather} name="lock" size="sm" ml="2" color="coolGray.400" />
          }
          type={show ? "text" : "password"}
          InputRightElement={<Pressable onPress={() => setShow(!show)}>
            <Icon as={<Feather name={show ? "eye" : "eye-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>}/>
      </FormControl>
    </VStack>
    )
}
