import { View, Text } from "react-native";
import Header from "../components/header";
import Footer from "../components/footer";

const ClassPage = ({ route }) => {
  return (
    <>
      <Header></Header>
      <View>
        <Text>{route.params.id}</Text>
      </View>
      <Footer></Footer>
    </>
  );
};

export default ClassPage;
