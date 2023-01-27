import { Heading, HStack, Icon, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import {useAuth} from "../hooks/useAuth";

export default function HomeHeader() {
  const { signOut } = useAuth();
  return (
    <HStack bg="purple.600" pt={16} pb={5} px={8} alignItems="center">
      <VStack flex={1}>
        <Text fontSize="md" color="gray.100">
          Olá,
        </Text>
        <Heading fontSize="md" color="gray.100">
          Keven!
        </Heading>
      </VStack>
      <TouchableOpacity onPress={signOut}>
        <Icon as={<MaterialIcons name="logout" />} color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
