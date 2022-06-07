import React, {useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, Dimensions, SafeAreaView} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar/src/StatusBar';
import styles from './styles';


// Icons
import { Ionicons } from '@expo/vector-icons/build/Icons';
import { Feather } from '@expo/vector-icons/build/Icons';
import { Fontisto } from '@expo/vector-icons/build/Icons';
import { MaterialCommunityIcons } from '@expo/vector-icons/build/Icons';







export default function TelaCadastro({navigation}) {



    const {width, heigth} = Dimensions.get('screen');





    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [role,setRole] = useState();




    async function registrar(){

        const res = await fetch('http://switch-gym.herokuapp.com/api/users',{
            method:'POST',
            mode: 'cors',
            headers: new Headers({

                'Content-Type': "application/json;charset=utf-8"
            }),
            body:JSON.stringify({
                "user": {
                    "name":name,
                    "email": email,
                    "password": password,
                    "role": role
                }
            })
        });
        if (res.status != 201) {
            Alert.alert('Erro ao cadastrar', 'Não foi possivel concluir o cadastro, certifique-se de ter prenchido todos os dados corretamente');


            return;
        }



        navigation.navigate("Login");





    }


    return (


        <SafeAreaView style={{ width:width, height:heigth, flex:1,  }}>
            <StatusBar hidden/>

            {/* Image logo */}
            <Image
                style={styles.imgLogo}
                source={require('../../../assets/imgs/FitDreams2.png')}
            />






            <Text style={styles.title}> Registre-se</Text>

            {/* TextInput nome */}
            <View style={styles.textInputContainer}>
                <Ionicons
                    name="ios-person-outline"
                    size={24}
                    color="black"
                    style={styles.icons}
                />

                <TextInput
                    style={styles.textInput}
                    placeholder='Nome Completo...'
                    onChangeText={text=>setName(text)}

                />
            </View>
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



            {/* DropDownBox  permite selecionar que funcão o usuario irá exercer e com base nisso ter uma tratativa diferente*/}

            <View style={styles.textInputContainer}>

                <Fontisto
                    name="person"
                    size={24}
                    color="black"
                    style={styles.icons}
                />

                <Picker
                    selectedValue={role}
                    style={styles.textInput}
                    onValueChange={(itemValue,) => setRole(itemValue)}

                >

                    <Picker.Item
                        label='Professor'
                        value="teacher"
                    />

                    <Picker.Item
                        label="Cliente"
                        value="customer"

                    />


                </Picker>

            </View>



            <TouchableOpacity
                onPress={() => registrar()}
                style={styles.btnRegistrar}
            >

                <Text style={styles.titleBtnRegistrar}>
                    Registrar-se
                </Text>

            </TouchableOpacity>

            <View style={styles.BtnAjudaContainer}>
                <Text pre style={styles.titleAjuda}>
                    Já possui uma conta?
                </Text>




                <Text
                    onPress={()=> navigation.navigate("Login")}
                    style={styles.titleBtnLogin}
                > Fazer login

                </Text>


            </View>




        </SafeAreaView>
    );
}
