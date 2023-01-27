import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Heading, HStack, Icon, Text, VStack } from "native-base";
import { Feather } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {};
export default function AulasCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="purple.100" alignItems="center" p={2} pr={4} rounded="md" mb={3}>
        <VStack>
          <Heading fontSize="lg" color="gray.700">
            Remada Curvada
          </Heading>

          <Text fontSize="sm" color="gray.700" mt={1} numberOfLines={2}>
            3x10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illo minima, tenetur assumenda
            repellendus neque, ratione delectus, repudiandae sint placeat perspiciatis? Explicabo asperiores debitis
            iusto odit, distinctio commodi rerum vel!
          </Text>
        </VStack>
        <Icon as={Feather} name="chevron-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
}
