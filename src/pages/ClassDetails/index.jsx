import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import { useRoute } from "@react-navigation/native";
import { api } from "../../services/api";
import { AntDesign } from '@expo/vector-icons'; 

export default function ClassDetails(){
    const route = useRoute();
    const { signOut } = useContext(AuthContext);
    const [detail, setDetail] = useState({});
    const idDetail = route.params.id;

    useEffect(() => {
        console.log('O idDetail é: ' + idDetail)
        async function handleDetail(){
            try {
                const response = await api.get(`api/gym_classes/${idDetail}`);
                console.log(response.data);
                setDetail(response.data);

            } catch (error) {
                console.log('Erro ao pegar os detalhes do usuário', error)
            }
        }

        handleDetail();
        console.log('último: ' + detail);
    }, [])

    return(
        <>
        <TouchableOpacity onPress={signOut} style={styles.button}><AntDesign name="logout" size={24} color="#FFF" style={styles.logout} /></TouchableOpacity>
        <View style={styles.container}>
            <Text style={styles.title}>Detalhes da aula</Text>
            
            <View key={detail.id} style={styles.card}>
                <Text style={styles.text}>Nome da aula: {detail.name}</Text>

                <Text style={styles.text}>Descrição: {detail.description}</Text>

                <Text style={styles.text}>Professor: {detail.teacher_name}</Text>

                <Text style={styles.text}>Horário: {detail.start_time}</Text>

                <Text style={styles.text}>Duração: {detail.duration}</Text>

                <Text style={styles.text}>Categoria: {detail.category_id}</Text>
            </View>         
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#26254D'
    },
    text:{
        fontSize: 20,
        color: '#FFF',
        marginBottom: 10
    },
    title:{
        fontSize: 30,
        color: '#FFF',
        marginBottom: 12,
    },
    card:{
        backgroundColor: '#484888',
        padding: 20,
        borderRadius: 8
    },
    button:{
        backgroundColor: '#26254D',
        height: 54,
        justifyContent: 'center'
    },
    logout:{
        marginLeft: 300
    }
})