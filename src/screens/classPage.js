import { View, Text } from "react-native";

const ClassPage = ({ route }) => {
  return (
    <View>
      <Text>{route.params.id}</Text>
    </View>
  );
};

export default ClassPage;
