import { View, Text } from "react-native";
import { showGymClasses } from "../services/api";


export default function classBox({group}) {

  return (
    <View>
      <Text>{group.name}</Text>
      <Text>{group.time}</Text>
      <Text>{group.description}</Text> 
    </View>
  );
}
