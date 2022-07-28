import React, { useState } from "react";
import {
    Alert,
    Dimensions,
    View,
    ImageBackground
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar/src/StatusBar";
import styles from "./styles";

// Components
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import SignInSignUpBtn from "../../components/SignInSignUpBtn";
import AltScreenBtn from "../../components/AlternateScreenButton";


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

        <View style={{width:width, height:heigth, backgroundColor:'#000', flex:1}}>
            <StatusBar hidden/>
            <ImageBackground
                style={styles.imgBackground}
                source={{uri: "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}}>

                <AltScreenBtn
                    setTop={46}
                    setLeft={52}
                    onpressSignUp= {() => props.navigation.navigate("Cadastro")}

                />
            </ImageBackground>




            <View style={styles.containerInputs}>

                {/*Email Text Input*/}
                <EmailInput
                    setValue={setEmail}
                />

                {/* TextInput senha */}

                <PasswordInput
                    setValue={setPassword}
                />



                <SignInSignUpBtn
                    onpress={login}
                    labelBtn="LOGIN"
                />





            </View>
        </View>
    );
}
