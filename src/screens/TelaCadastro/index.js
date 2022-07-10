import React, { useState } from "react";
import {
    View,
    Text,
    Alert,
    Dimensions,
    SafeAreaView,
    ActivityIndicator,
    ImageBackground,

} from "react-native";

import { StatusBar } from "expo-status-bar/src/StatusBar";
import styles from "./styles";

// Components
import NameInput from "../../components/NameInput";
import EmailInput from "../../components/EmailInput";
import PasswordInput from "../../components/PasswordInput";
import DropDownRoles from "../../components/DropDownRoles";
import SignInSignUpBtn from "../../components/SignInSignUpBtn";
import ImgSignUp from "../../../assets/imgs/ImgSignUp.jpg";


export default function TelaCadastro({ navigation}) {
    const { width, heigth } = Dimensions.get("screen");
    // States of function
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState();

    async function signUp() {
        startLoading();

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


    }

    const [loading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    return (


        <SafeAreaView style={{ width: width, height:heigth, flex:1}}>
            <StatusBar hidden />

            {loading ? (
                <View style={{ backgroundColor:'#000000', flex:1}}>
                    <ActivityIndicator
                        style={{position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            opacity: 0.5,
                            backgroundColor: 'black',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        color={'#5038AE'}
                        size='large'

                        //visibility of Overlay Loading Spinner
                        visible={loading}
                        //Text with the Spinner
                        textContent={'Loading...'}
                        //Text style of the Spinner Text
                        textStyle={styles.titleSpinner}
                    />

                    <Text style={styles.titleSpinner}> Carregando...</Text>
                </View>
            ) : (

                <View style={{width:width, height:heigth, backgroundColor:'#000', flex:1}}>

                    <ImageBackground source={ImgSignUp} style={styles.imgBackground}>
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

                        <SignInSignUpBtn onpress={signUp} labelBtn="Registrar-se" />



                    </View>
                </View>


            )}

        </SafeAreaView>
    );
}
