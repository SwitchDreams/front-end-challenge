import {useState} from "react";
import {Box, Center, HStack, Icon, Pressable, Text} from "native-base";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function Footer(){
  const [selected, setSelected] = useState(1);
  return(
      <Box bg="white" safeArea width="100%" alignSelf="center" >
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 0 ? 'home' : 'home-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? 'account' : 'account-outline'} />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                Minhas Aulas
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
  );
}
