import { View, TextInput, Text, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { createUser } from "../services/api";
import { useState } from "react";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");

  return (
    <View>
      <Text>email</Text>
      <TextInput
        style={{ backgroundColor: "red" }}
        onChangeText={(value) => {
          setEmail(value);
          console.log(value);
        }}
      />
      <Text>password</Text>
      <TextInput
        style={{ backgroundColor: "red" }}
        secureTextEntry={true}
        onChangeText={(value) => {
          setPassword(value);
        }}
      />
      <Picker
        selectedValue={role}
        onValueChange={(Value) => setRole(Value)}
        style={{ height: 50, width: 150, backgroundColor: "blue" }}
      >
        <Picker.Item label="Professor" value="teacher" />
        <Picker.Item label="Administrador" value="admin" />
        <Picker.Item label="Usuário" value="customer" />
      </Picker>
      <Pressable
        onPress={() =>
          createUser(email, password, role)
            .then((res) => {
              navigation.navigate("Home");
            })
            .catch((err) => {
              alert("impossível de criar sua conta");
            })
        }
        style={{ paddingTop: 50, backgroundColor: "blue" }}
      >
        <Text>Resgitrar</Text>
      </Pressable>
    </View>
  );
};

export default Register;
