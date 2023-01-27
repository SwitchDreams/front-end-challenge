import {Box, Button, Heading, HStack, Icon, Text, VStack, Image, ScrollView} from "native-base";
import {Feather} from "@expo/vector-icons";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {AppNavigatorRoutesProps} from "../routes/app.routes";
import {TouchableOpacity} from "react-native";

export default function Aulas() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px={8} bg="purple.600" pt={12}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon
            as={Feather}
            name="chevron-left"
            color="white"
            size={6}
          />
        </TouchableOpacity>

        <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
          <Heading color="gray.100" fontSize="lg"  flexShrink={1} fontFamily="heading">
            Puxada frontal
          </Heading>

          <HStack alignItems="center">


            <Text color="gray.200" ml={1} textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>
      <ScrollView>
        <VStack p={8}>
          <Image
            w="full"
            h={80}
            source={{ uri: 'http://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg' }}
            alt="Nome do exercício"
            mb={3}
            resizeMode="cover"
            rounded="lg"
          />
          <Box bg="purple.400" rounded="md" pb={4} px={4}>
            <HStack alignItems="center" justifyContent="space-around" mb={6} mt={5}>
              <HStack>
                <Icon as={Feather} name="user" color="gray.200" size={5} />
                <Text color="gray.200" ml="2">
                  Professor
                </Text>
              </HStack>

              <HStack>
                <Icon as={Feather} name="calendar" color="gray.200" size={5} />
                <Text color="gray.200" ml="2">
                  Horário
                </Text>
              </HStack>

              <HStack>
                <Icon as={Feather} name="calendar" color="gray.200" size={5} />
                <Text color="gray.200" ml="2">
                  Data
                </Text>
              </HStack>
            </HStack>

            <Button colorScheme="purple">
              Alterar
            </Button>
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
