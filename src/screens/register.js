import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { AuthContext } from "../context/auth";
import { useState, useContext } from "react";
import Button from "../components/button";
import Input from "../components/input";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const {register} = useContext(AuthContext);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="none" enabled>
      <Text style={styles.loginText}>Cadastro</Text>
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
        <Picker
          selectedValue={role}
          onValueChange={(Value) => setRole(Value)}
          style={{
            width: 300,
            height: 45,
            backgroundColor: "#230E49",
            paddingLeft: 15,
            color: "#ffffff",
            fontSize: 16,
            marginTop: 10,
          }}
        >
          <Picker.Item label="Professor" value="teacher" />
          <Picker.Item label="Aluno" value="customer" />
        </Picker>
        <Button
          label="Registrar"
          onPress={() =>
            register(email, password, role)
          }
        />
        <Image source={require("../../src/assets/run.png")} />
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

export default Register;
