import { Text, TextInput, StyleSheet, View } from "react-native";

export default function Input({ label, onChangeText, secureTextEntry }) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#230E49",
  },
  input: {
    width: 300,
    height: 45,
    borderRadius: 10,
    backgroundColor: "#230E49",
    paddingLeft: 15,
    color: "#ffffff",
    fontSize: 16,
  }
});
