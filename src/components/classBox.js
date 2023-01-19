import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";

export default function classBox({ group }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("classPage", { id: group.id });
      }}
    >
      <View>
        <Text>{group.name}</Text>
        <Text>{group.start_time}</Text>
        <Text>{group.teacher_name}</Text>
        <Text>{group.description}</Text>
      </View>
    </TouchableOpacity>
  );
}
