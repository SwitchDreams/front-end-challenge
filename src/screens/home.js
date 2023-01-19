import { Button, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import ClassBox from "../components/classBox";
import { api } from "../services/api";

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
      <Button title="Login" onPress={() => navigation.navigate("Login")} />
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};

export default ShowClass;
