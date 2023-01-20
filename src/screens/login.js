import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { loginUser } from "../services/api";
import { useState } from "react";
import Button from "../components/button";
import Input from "../components/input";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container} behavior="none" enabled>
      <Text style={styles.loginText}>Login</Text>
      <View style={styles.inputBox}>
        <Input
          label="Email"
          secureTextEntry={false}
          onChangeText={(value) => {
            setEmail(value);
          }}
        />
        <Input
          label="Password"
          secureTextEntry={true}
          onChangeText={(value) => {
            setPassword(value);
          }}
        />
        <Button
          label="Login"
          onPress={() => {
            loginUser(email, password)
              .then((res) => {
                navigation.navigate("Home");
              })
              .catch((err) => {
                alert("impossível de fazer login");
              });
          }}
          style={{ paddingTop: 50, backgroundColor: "blue" }}
        />
        <Image source={require("../../src/assets/gym.png")} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ECFFF8",
    width: "100%",
    height: "100%",
  },
  loginText: {
    fontSize: 40,
    fontFamily: "Roboto",
    fontWeight: "bold",
    lineHeight: 47,
  },
  inputBox: {
    flex: 1,
    alignItems: "center",
    marginTop: 66,
    justifyContent: "space-between",
    postion: "absolute",
  },
});

export default Login;
