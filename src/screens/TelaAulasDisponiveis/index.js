
import React from 'react';
import { View, Text, Alert } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage';







export default function TelaAulasDisponiveis() {

    const danca = "dança";
    const description = "descricão maior";

    async function gymclass(){


        const token = await AsyncStorage.getItem("bearer_token");

        const res = await fetch(`http://switch-gym.herokuapp.com/api/categories`,{
            method:'POST',

            headers: new Headers({

                'Content-Type': "application/json;charset=utf-8",
                'Authorization': token

            }),
            body:JSON.stringify({
                "category": {
                    "name":  danca,
                    "description": description
                }
            }),

        });
        if (res.status != 201) {
            Alert.alert('Usuario sem permissão',
                'Somente Professores ou admins podem adicionar conteudos. Se você é um professor ou admin, mas não consegue adicionar conteúdo por favor entre em contato com nosso suporte');


            return;
        }

        Alert.alert('sucesso fela');



    }
    return (

        <View>
            <Text onPress={gymclass}>hello wsrld</Text>

        </View>

    );


}

