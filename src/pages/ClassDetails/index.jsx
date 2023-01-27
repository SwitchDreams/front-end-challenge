import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import { useRoute, useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import { AntDesign } from '@expo/vector-icons'; 

export default function ClassDetails(){
    const route = useRoute();
    const navigation = useNavigation();
    const { signOut, user } = useContext(AuthContext);
    const [detail, setDetail] = useState({});
    const { id } = route.params;

    const { role } = user;

    useEffect(() => {

        async function handleDetail(){
            try {
                const response = await api.get(`api/gym_classes/${id}`);
                setDetail(response.data);
               

            } catch (error) {
                console.log('Erro ao pegar os detalhes do usuário', error)
            }
        }
        handleDetail();
    }, [])

    function handleClick(){
        if (id !== undefined) {
            console.log(id);
            navigation.navigate('EditClass', { id });  
        }
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={signOut} style={styles.button}><AntDesign name="logout" size={24} color="#FFF" /></TouchableOpacity>
            <Text style={styles.title}>Detalhes da aula</Text>
            
            <View key={detail.id} style={styles.card}>
                <Text style={styles.text}>Id da aula: {detail.id}</Text>

                <Text style={styles.text}>Nome da aula: {detail.name}</Text>

                <Text style={styles.text}>Descrição: {detail.description}</Text>

                <Text style={styles.text}>Professor: {detail.teacher_name}</Text>

                <Text style={styles.text}>Horário: {detail.start_time}</Text>

                <Text style={styles.text}>Duração: {detail.duration}</Text>

                <Text style={styles.text}>Categoria: {detail.category_id}</Text>
            </View>
            {role !== 'customer' ? (<TouchableOpacity style={styles.buttonEdit} onPress={handleClick}><Text style={styles.textEdit}>Editar Aula</Text></TouchableOpacity>) : (<View></View>)}      
        </View>
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
        marginTop: 100
    },
    card:{
        backgroundColor: '#484888',
        padding: 20,
        borderRadius: 8,
        height: 260,
        width: '90%'
    },
    button:{
        backgroundColor: '#26254D',
        height: 30,
        width: 27,
        marginLeft: 270
    },
    buttonEdit:{
        backgroundColor: '#8d8786',
        height: 54,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12,
        width: '90%',
        marginBottom: 210
    },
    textEdit:{
        color: '#FFF'
    }
})