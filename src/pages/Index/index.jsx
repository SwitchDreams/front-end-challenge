import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import { api } from '../../services/api';
import Class from '../../components/class';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'; 

export default function Index(){
    const navigation = useNavigation();
    const { signOut } = useContext(AuthContext);
    const [list, setList] = useState();

    useEffect(() => {
      async function handleIndexClass(){
            try {
                const response = await api.get('api/gym_classes');
                if(response){
                    console.log('sucesso!');
                }
                setList(response.data);
            } catch (error) {
                console.log('erro ao puxar a lista de aulas', error)
            }
        }

        handleIndexClass();
    }, [])

    function handleClick(id){
        navigation.navigate('ClassDetails', { id });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={signOut} style={styles.button}><AntDesign name="logout" size={24} color="#FFF" /></TouchableOpacity>
            <Text style={styles.title}>Lista de aulas disponíveis</Text>
            
            {list ? (
                list.map(item => <Class key="{item}" name={item.name} navigateDetail={ () => handleClick(item.id) }/>)
            ) : (<View key="{item}"><Text style={styles.text}></Text></View>)}
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
        fontSize: 30,
        color: '#FFF',
        marginBottom: 12,
    },
    title:{
        fontSize: 30,
        color: '#FFF',
        marginBottom: 20,
        marginTop: 30
    },
    textLoading:{
        fontSize: 20,
        color: '#af1818',
        marginBottom: 12,
    },
    button:{
        width: 27,
        height: 30,
        marginLeft: 270
    }
})