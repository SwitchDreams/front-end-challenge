import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    Dimensions,
    SafeAreaView,
} from "react-native";

import { StatusBar } from "expo-status-bar/src/StatusBar";
import styles from "./styles";

// Components
import NameInput from "../../components/NameInput";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import DropDownRoles from "../../components/DropDownRoles";
import SignInSignUpBtn from "../../components/SignInSignUpBtn";
import BtnHelpUser from "../../components/BtnHelpUser";

export default function TelaCadastro({ navigation }) {
    const { width, heigth } = Dimensions.get("screen");
    // States of function
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState();

    async function signUp() {
        const res = await fetch("http://switch-gym.herokuapp.com/api/users", {
            method: "POST",
            mode: "cors",
            headers: new Headers({
                "Content-Type": "application/json;charset=utf-8",
            }),
            body: JSON.stringify({
                user: {
                    name: name,
                    email: email,
                    password: password,
                    role: role,
                },
            }),
        });
        if (res.status != 201) {
            Alert.alert(
                "Erro ao cadastrar",
                "Não foi possivel concluir o cadastro, certifique-se de ter prenchido todos os dados corretamente"
            );

            return;
        }

        navigation.navigate("Login");
    }


    return (
        <SafeAreaView style={{ width: width, height:heigth, flex:1}}>
            <StatusBar hidden />

            {/* Image logo */}
            <Image
                style={styles.imgLogo}
                source={require("../../../assets/imgs/FitDreams2.png")}
            />

            <Text style={styles.title}>
                Registre-se
            </Text>

            {/*Name Text Input*/}
            <NameInput
                setValue={setName} />
            {/*Email Text Input*/}
            <EmailInput
                setValue={setEmail} />

            {/* TextInput senha */}

            <PasswordInput
                setValue={setPassword} />

            {/* DropDownBox  the user can select your role, i put this just for tests because in a real app the role  is altered in data base or with a diferent form.*/}

            <DropDownRoles
                pickerValue={role}
                setValue={setRole} />

            <SignInSignUpBtn onpress={signUp} labelBtn="Registrar-se" />

            <BtnHelpUser
                onpress={() => navigation.navigate("Login")}
                txt="Já possui uma conta?"
                txtBtn=" Fazer login"
            />
        </SafeAreaView>
    );
}
