import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import {
    ActivityIndicator, Alert,
    Dimensions, ImageBackground, SafeAreaView, Text, View
} from "react-native";

import { StatusBar } from "expo-status-bar/src/StatusBar";
import styles from "./styles";

// Components
import DropDownRoles from "../../components/DropDownRoles";
import EmailInput from "../../components/EmailInput";
import NameInput from "../../components/NameInput";
import PasswordInput from "../../components/PasswordInput";
import SignInSignUpBtn from "../../components/SignInSignUpBtn";
import AltScreenBtn from '../../components/AlternateScreenButton';


export default function TelaCadastro({ navigation}) {
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

        <View style={{width:width, height:heigth, backgroundColor:'#000', flex:1}}>
            <StatusBar hidden/>
            <ImageBackground

                style={styles.imgBackground}
                source={{uri: "https://images.unsplash.com/photo-1534367899781-0d696bebc1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGd5bXxlbnwwfHwwfGJsYWNrX2FuZF93aGl0ZXw%3D&auto=format&fit=crop&w=500&q=60"}}
            >
                <AltScreenBtn
                    setTop={46}
                    setLeft={132 }
                    onpressLogin={()=> navigation.navigate('Login')}


                />
            </ImageBackground>




            <View style={styles.containerInputs}>



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

                <SignInSignUpBtn onpress={signUp} labelBtn="REGISTRAR-SE" />




            </View>
        </View>


    );}


