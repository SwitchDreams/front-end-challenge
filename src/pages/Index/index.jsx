import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, ViewBase } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import { api } from '../../services/api';
import Class from '../../components/class';

export default function Index(){
    //const { signOut } = useContext(AuthContext);
    const [list, setList] = useState();

    //const list = [{name: 'aula 1'}, {name: 'aula 2'}, {name: 'aula 3'}];

    // useEffect(() => {
    //     const listPreview = []
    //     async function handleIndex(){
    //         const response = await api.get('api/gym_classes');
    //         setList(response);
    //     }
    //     handleIndex();
    //     listPreview && setList(listPreview)
    // }, [])

    async function handleIndexClass(){
        try {
            const response = await api.get('api/gym_classes');
            if(response){
                console.log('sucesso!');
            }
            console.log(response.data);
            setList(response.data);
        } catch (error) {
            console.log('erro ao puxar a lista de aulas', error)
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Lista de aulas disponíveis</Text>
            {/* <Button title="Sair do app" onPress={signOut} /> */}
            <Button title='Visualizar aulas' onPress={handleIndexClass} />

            {list ? (
                list.map(item => <View key="{item}"><Text>{item.name}</Text></View>)
            ) : (<View key="{item}"><Text style={styles.text}>Click no botão para visualizar as aulas</Text></View>)}


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
        color: '#FFF'
    }
})

/*
    - A renderização condicional está funcionando.
    - O map está funcionado
*/