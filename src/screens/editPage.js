import { View, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import moment from "moment";
import Input from "../components/input";
import Button from "../components/button";

const ClassPage = ({ route, navigation }) => {
  const [time, setTime] = useState("");
  const [gymClass, setGymClass] = useState({
    id: route.params.class.id,
    name: route.params.class.name,
    description: route.params.class.description,
    teacher_name: route.params.class.teacher_name,
    start_time: route.params.class.start_time,
    duration: route.params.class.duration / 60,
    categoty_id: route.params.class.categoty_id,
  });

  useEffect(() => {
    const time = route.params.class.start_time;
    setTime(moment.utc(time).format("HH:mm"));
  });
  return (
    <>
      <Header></Header>
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
        <Image
          source={require("../../src/assets/academy.png")}
          style={styles.image}
        />
        <View style={styles.inputBox}>
          <Input
            label="Nome da aula:"
            secureTextEntry={false}
            value={gymClass.name}
            onChangeText={(value) => {
              setGymClass((prevState) => ({ ...prevState, name: value }));
            }}
          />
          <Input
            label="Professor responsável:"
            secureTextEntry={false}
            value={gymClass.teacher_name}
            onChangeText={(value) => {
              setGymClass((prevState) => ({
                ...prevState,
                teacher_name: value,
              }));
            }}
          />
          <Input
            label="Duração da aula"
            secureTextEntry={false}
            value={gymClass.duration}
            onChangeText={(value) => {
              setGymClass((prevState) => ({ ...prevState, duration: value }));
            }}
          />
          <Input
            label="Horario da aula:"
            secureTextEntry={false}
            value={time}
            onChangeText={(value) => {
              setGymClass((prevState) => ({ ...prevState, start_time: value }));
            }}
          />
          <Input
            label="Descrição da aula:"
            secureTextEntry={false}
            value={gymClass.description}
            onChangeText={(value) => {
              setGymClass((prevState) => ({
                ...prevState,
                description: value,
              }));
            }}
            styles={{ marginBottom: 10 }}
          />
          <Button
            label="Salvar"
            styles={{ marginTop: 20 }}
            onPress={() => {
              api
                .patch(`gym_classes/${gymClass.id}`, {
                  gym_class: {
                    id: route.params.class.id,
                    name: gymClass.name,
                    description: gymClass.description,
                    teacher_name: gymClass.teacher_name,
                    start_time: time,
                    duration: gymClass.duration,
                    categoty_id: route.params.class.categoty_id,
                  },
                })
                .then((res) => {
                  alert("sucesso");
                  navigation.navigate({
                    name: "Home",
                  });
                })
                .catch((err) => {
                  alert("Erro");
                });
            }}
          />
        </View>
      </KeyboardAvoidingView>
      <Footer></Footer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    width: "100%",
    backgroundColor: "#ECFFF8",
  },
  inputBox: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  editContainer: {
    flex: 1,
    position: "absolute",
    bottom: 10,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  infoBox: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 40,
    width: "40%",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "35%",
    marginBottom: 10,
  },
  text: {
    fontSize: 32,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#2BB39C",
  },
  textInfo: {
    fontSize: 32,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#2BB39C",
    marginLeft: 10,
  },

  textDescription: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#2BB39C",
    marginLeft: 10,
  },
});

export default ClassPage;
