import { FlatList, Heading, HStack, Text, VStack } from "native-base";
import HomeHeader from "../components/HomeHeader";
import AulasCard from "../components/AulasCard";
import { useState } from "react";
import {useNavigation} from "@react-navigation/native";
import {AppNavigatorRoutesProps} from "../routes/app.routes";

export default function Home() {
  const [aulas, setAulas] = useState(["zumba", "crossfit", "yoga"]);

  const navigation = useNavigation<AppNavigatorRoutesProps>();
  function handleOpenAulaDetails() {
    navigation.navigate("Aulas");
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <VStack flex={1} px={8} py={5}>
        <AulasCard
          onPress={handleOpenAulaDetails}
        />

        <FlatList
          data={aulas}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <AulasCard />}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
