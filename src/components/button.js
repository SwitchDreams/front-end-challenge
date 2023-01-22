import { Text, Pressable, StyleSheet } from "react-native";

export default function Button({label, onPress}) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#230E49",
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderColor: "black",
    borderRadius: 8,
    width: 144,
    maxHeight: 54,
    opacity: 0.7
  },
  text: {
    fontSize: 24,
    fontFamily: "Roboto",
    fontWeight: "bold",
    lineHeight: 47,
    color: "#ffffff",
    padding: 5,
    textAlign: "center"
  },
});
