import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, Dimensions, SafeAreaView} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import styles from './styles';



// Icons

import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function TelaLogin({navigation}) {

    const {width, heigth} = Dimensions.get('screen');

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

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
        if (res.status != 200) {

            Alert.alert('Erro de Login', 'Não foi possivel fazer o login, email ou senha inválidos');

            return;
        }
        navigation.navigate("VerAulas");

    }

    return (

        <SafeAreaView style={{ width:width, height:heigth, flex:1,  }}>
            <StatusBar hidden/>

            <Image
                style={styles.backgroundImg}
                source={require('../../assets/imgCadastro/FitDreams2.png')}
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


            {/* TextInput senha */}

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




            <TouchableOpacity
                onPress={() => login()}
                style={styles.btnRegistrar}
            >

                <Text style={styles.titleBtnRegistrar}>
                    Fazer Login
                </Text>

            </TouchableOpacity>

            <View style={styles.BtnAjudaContainer}>
                <Text pre style={styles.titleAjuda}>
                    Não possui uma conta?
                </Text>




                <Text
                    onPress={()=> navigation.navigate("Cadastro")}
                    style={styles.titleBtnLogin}
                > Cadastre-se

                </Text>


            </View>




        </SafeAreaView>
    );
}
