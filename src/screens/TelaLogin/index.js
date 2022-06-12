import React, { useState } from "react";
import {
    Text,
    Alert,
    Image,
    Dimensions,
    SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar/src/StatusBar";
import styles from "./styles";

// Components
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import SignInSignUpBtn from "../../components/SignInSignUpBtn";
import BtnHelpUser from "../../components/BtnHelpUser";

export default function TelaLogin(props) {
    //  Discovering the dimension of screen to create a responsive screen
    const { width, heigth } = Dimensions.get("screen");
    // Defining the Email and Password states of text input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Using an async function to make the request
    async function login() {
        const res = await fetch(
            `http://switch-gym.herokuapp.com/api/users/login`,
            {
                method: "POST",
                mode: "cors",
                headers: new Headers({
                    "Content-Type": "application/json;charset=utf-8",
                }),

                body: JSON.stringify({
                    user: {
                        email: email,
                        password: password,
                    },
                }),
            }
        );
        // error handling
        if (res.status != 200) {
            Alert.alert(
                "Erro de Login",
                "Não foi possivel fazer o login, email ou senha inválidos"
            );

            return;
        }
        // Getting Bearer tokem from  response header
        const token = res.headers.get("Authorization");

        // If the token was received, asynchronous storage will save it as a cookie so it can be reused later
        if (token) {
            await AsyncStorage.setItem("bearer_token", token);
        }

        console.log(await AsyncStorage.getItem("bearer_token"));

        // Getting a json with user data
        const data = await res.json();
        const userRole = data.role;
        console.log(userRole);

        //  If the role of user = Teacher ou admin so it goes to a screen with more resources
        if ((userRole == "teacher") | "admin") {
            props.navigation.navigate('CriarCategoriasProfessores');
        }
        // Else goes to a limited screen of user custumer
        else {
            props.navigation.navigate('Categorias', { id_user: data.id });
        }
    }



    return (
        <SafeAreaView style={{ width: width, height: heigth, flex: 1 }}>
            <StatusBar hidden />

            {/* Image logo */}
            <Image
                style={styles.imgLogo}
                source={require("../../../assets/imgs/FitDreams2.png")}
            />

            <Text style={styles.title}>
                Faça Login
            </Text>

            {/* TextInput  email*/}

            <EmailInput
                setValue={setEmail}
            />

            {/* TextInput password */}

            <PasswordInput
                setValue={setPassword}
            />

            {/* Button Login */}
            <SignInSignUpBtn
                labelBtn="Login"
                onpress={login}
            />

            {/* TouchableOpacity SignUp */}

            <BtnHelpUser
                txt="Não possui conta?"
                txtBtn=" Registre-se"
                onpress={() => props.navigation.navigate("Cadastro")}
            />
        </SafeAreaView>
    );
}
