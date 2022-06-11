import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, Dimensions, SafeAreaView,  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar/src/StatusBar';
import styles from './styles';


// Icons

import { Feather } from '@expo/vector-icons/build/Icons';
import { MaterialCommunityIcons } from '@expo/vector-icons/build/Icons';







export default function TelaLogin(props) {



    //  Discovering the dimension of screen to create a responsive screen
    const {width, heigth} = Dimensions.get('screen');
    // Defining the Email and Password states of text input
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    // Using an async function to make the request
    async function login() {

        const res = await fetch(`http://switch-gym.herokuapp.com/api/users/login`,{
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': "application/json;charset=utf-8"
            }),

            body:JSON.stringify({
                "user": {
                    "email": email,
                    "password": password
                }
            })

        });



        // error handling
        if (res.status != 200) {

            Alert.alert(
                'Erro de Login',
                'Não foi possivel fazer o login, email ou senha inválidos'
            );

            return;
        }
        // Getting Bearer tokem from  response header
        const token =  res.headers.get('Authorization');

        // If the token was received, asynchronous storage will save it as a cookie so it can be reused later
        if(token){
            await AsyncStorage.setItem("bearer_token", token);
        }

        console.log(await AsyncStorage.getItem("bearer_token"));

        // Getting a json with user data
        const data = await res.json();
        const userRole = data.role;
        console.log(userRole);


        //  If the role of user = Teacher ou admin so it goes to a screen with more resources
        if(userRole == "teacher"|"admin"){

            props.navigation.navigate('CriarAulaProfessor');

        }
        // Else goes to limited screen of  custumer user
        else{
            props.navigation.navigate("VerAulaAluno");
        }
    }
    return (

        <SafeAreaView style={{ width:width, height:heigth, flex:1,  }}>
            <StatusBar hidden/>

            {/* Image logo */}
            <Image
                style={styles.imgLogo}
                source={require('../../../assets/imgs/FitDreams2.png')}
            />

            <Text style={styles.title}> Faça Login</Text>

            {/* TextInput  email*/}
            <View style={styles.textInputContainer}>
                <MaterialCommunityIcons
                    name="email-outline"
                    size={24}
                    color="black"
                    style={styles.icons}
                />

                <TextInput
                    style={styles.textInput}
                    placeholder='Seu e-mail...'
                    onChangeText={text=>setEmail(text)}

                />
            </View>

            {/* TextInput password */}

            <View style={styles.textInputContainer}>

                <Feather
                    name="lock"
                    size={24}
                    color="black"
                    style={styles.icons}

                />

                <TextInput
                    style={styles.textInput}
                    placeholder='Sua senha...'
                    secureTextEntry={true}
                    onChangeText={text=>setPassword(text)}


                />
            </View>

            {/* Button Login */}
            <TouchableOpacity
                onPress={login}
                style={styles.btnLogin}
            >

                <Text style={styles.titleBtnLogin}>
                    Fazer Login
                </Text>

            </TouchableOpacity>

            {/* TouchableOpacity SignUp */}
            <View style={styles.BtnAjudaContainer}>

                <Text pre style={styles.titleAjuda}>
                    Não possui uma conta?
                </Text>

                <Text
                    onPress={()=> props.navigation.navigate("Cadastro")}
                    style={styles.titleBtnCadastro}
                > Cadastre-se

                </Text>

            </View>
        </SafeAreaView>
    );
}
