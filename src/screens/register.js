import { View, TextInput, Text, Pressable, Picker } from "react-native";
import { createUser } from "../services/api";
import { useState } from "react";

const Register = () => {
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
        style={{ height: 50, width: 150, backgroundColor: "blue"}}
      >
        <Picker.Item label="Professor" value="teacher" />
        <Picker.Item label="Administrador" value="admin" />
        <Picker.Item label="Usuário" value="customer" />
      </Picker>
      <Pressable
        onPress={() => createUser(email, password, role)}
        style={{ paddingTop: 50, backgroundColor: "blue" }}
      >
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

export default Register;
