import { View, Text, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import moment from "moment";

const ClassPage = ({ route }) => {
  const [time, setTime] = useState();
  const [duration, setDuration] = useState();

  useEffect(() => {
    const time = route.params.class.start_time;
    setTime(moment.utc(time).format("HH:mm"));
    setDuration(route.params.class.duration / 60);
  });
  return (
    <>
      <Header></Header>
      <View style={styles.container}>
        <Image
          source={require("../../src/assets/academy.png")}
          style={styles.image}
        />
        <View style={styles.infoBox}>
          <Text style={styles.text}>Name:</Text>
          <Text style={styles.textInfo}>{route.params.class.name}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.text}>Professor:</Text>
          <Text style={styles.textInfo}>{route.params.class.teacher_name}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.text}>Duração:</Text>
          <Text style={styles.textInfo}>{duration + " min"}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.text}>Início:</Text>
          <Text style={styles.textInfo}>{time}</Text>
        </View>
        <View>
          <Text style={styles.text}>Descrição:</Text>
          <Text style={styles.textDescription}>
            {route.params.class.description}
          </Text>
        </View>
        {route.params.user === "teacher" || route.params.user === "admin" ? (
          <Text>{route.params?.user}</Text>
        ) : (
          <></>
        )}
      </View>
      <Footer isLogged={route.params?.isLogged}></Footer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    marginBottom: 90,
    width: "100%",
    backgroundColor: "#ECFFF8",
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
    height: "40%",
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
