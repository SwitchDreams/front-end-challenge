import { View, TextInput, Text, Pressable } from "react-native";
import { loginUser } from "../services/api";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      <Pressable onPress={() => loginUser(email, password)} style={{paddingTop: 50, backgroundColor: "blue"}}>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

export default Login;
