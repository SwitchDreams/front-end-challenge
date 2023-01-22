import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import moment from "moment";

export default function classBox({ group, onPress }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const time = group.start_time;
    setTime(moment.utc(time).format("HH:mm"));
  });
  
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={require("../../src/assets/academy.png")}
          style={styles.image}
        />
        <View style={styles.infoBox}>
          <Text style={styles.textName}>{group.name}</Text>
          <Text style={styles.textTime}>{time}</Text>
          <Text style={styles.text}>{group.teacher_name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 190,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#2BB39C",
  },
  textName: {
    fontSize: 32,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#2BB39C",
  },
  textTime: {
    fontSize: 32,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#2BB39C",
  },
  infoBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    postion: "absolute",
    backgroundColor: "#230E49",
    marginTop: -60,
    borderRadius: 10,
    opacity: 0.95,
    paddingBottom: 10,
  },
  container: {
    marginTop: 40,
  },
});
