import { ScrollView, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import ClassBox from "../components/classBox";
import { api } from "../services/api";
import Header from "../components/header";
import Footer from "../components/footer";

const Home = ({ navigation }) => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    showGymClasses();
  }, [classes]);

  const showGymClasses = async () => {
    await api.get("/gym_classes").then((res) => {
      res.data;
      setClasses(res.data);
    });
  };

  return (
    <>
      <Header></Header>
      <View style={styles.container}>
        <ScrollView>
          {classes !== undefined ? (
            classes.map((group, index) => (
              <ClassBox
                key={index}
                group={group}
                onPress={() => {
                  navigation.navigate({
                    name: "classPage",
                    params: {
                      class: group,
                    },
                  });
                }}
              ></ClassBox>
            ))
          ) : (
            <></>
          )}
        </ScrollView>
      </View>
      <Footer></Footer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 90,
    marginBottom: 90,
    width: "100%",
    backgroundColor: "#ECFFF8",
  },
  classesContainer: {},
  inputBox: {
    flex: 1,
    alignItems: "center",
    marginTop: 66,
    justifyContent: "space-between",
    postion: "absolute",
  },
});

export default Home;
