import { Button, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import ClassBox from "../components/classBox";
import { api } from "../services/api";
import Header from "../components/header";
import Footer from "../components/footer";

const ShowClass = ({ navigation }) => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    showGymClasses();
  }, []);

  const showGymClasses = async () => {
    await api.get("/gym_classes").then((res) => {
      res.data;
      setClasses(res.data);
    });
  };

  return (
    <>
      <Header></Header>
      <View>
        <ScrollView>
          {classes !== undefined ? (
            classes.map((group, index) => (
              <ClassBox key={index} group={group}></ClassBox>
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

export default ShowClass;
