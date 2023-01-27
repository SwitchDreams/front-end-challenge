import { Button, Center, Heading, IButtonProps, ScrollView, VStack } from "native-base";
import { InputBase } from "../components/InputBase";
import { ScreenHeader } from "../components/ScreenHeader";

type FormDataProps = {
  email: string;
  password: string;
  old_password: string;
  confirm_password: string;
}

export default function Profile({...rest} : IButtonProps) {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <VStack space={2} mt="5" px={10}>
          <InputBase placeholder="Email" isDisabled />
          <Heading color="gray.600" fontSize="md" mb={2} alignSelf="flex-start" mt={12} ml={10}  fontFamily="heading">
              Alterar senha
          </Heading>
          <InputBase placeholder="Senha antiga" secureTextEntry />

          <InputBase placeholder="Nova senha" secureTextEntry />

          <InputBase placeholder="Confirme a nova senha" secureTextEntry />

          <Button {...rest} mt={4} alignSelf="center" w="80%" colorScheme="purple">
              Atualizar
          </Button>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
