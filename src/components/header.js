import { Text, View, StyleSheet } from "react-native";

export default function () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>NO PAIN NO GAIN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#230E49",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    width: "100%",
    maxHeight: 90,
    position: "absolute",
    top: 30,
    left: 0,
  },
  text: {
    fontSize: 24,
    fontFamily: "Roboto",
    fontWeight: "bold",
    lineHeight: 47,
    color: "#2BB39C",
    padding: 8,
    textAlign: "center"
  },
});
