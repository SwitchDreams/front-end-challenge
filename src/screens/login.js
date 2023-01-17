import { View, TextInput, Text, Pressable } from "react-native";
import { createUser } from "../services/api";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const UserCreation = () => {
    createUser(email, password, "teacher");
  };

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
        onChange={(value) => {
          setPassword(value);
        }}
      />
      <Pressable onPress={() => UserCreation()} style={{paddingTop: 50, backgroundColor: "blue"}}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

export default Login;
