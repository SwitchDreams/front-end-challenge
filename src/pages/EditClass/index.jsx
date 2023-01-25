import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TextInput,  TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import { useRoute, useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";
import { AntDesign } from '@expo/vector-icons';

export default function EditClass(){
    const { signOut, loadingAuth } = useContext(AuthContext);
    const route = useRoute();
    const navigation = useNavigation();
    const { id } = route.params;

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [teacher_name, setTeacher_name] = useState('');
    const [start_time, setStart_time] = useState('');
    const [duration, setDuration] = useState('');

    useEffect(() => {
        async function handleDetail(){
            try {
                const response = await api.get(`api/gym_classes/${id}`);
                const { name, description, teacher_name, start_time, duration } = response.data;

                setName(name);
                setDescription(description);
                setTeacher_name(teacher_name);
                setStart_time(start_time);
                setDuration(duration);

            } catch (error) {
                console.log('Erro ao pegar os detalhes do usuário', error)
            }
        }
        handleDetail();
    }, [])
    
    async function handleEdit(){
        try {
            const response = await api.put(`api/gym_classes/${id}`, {
                "gym_class": {
                    "name": name,
                    "description": description,
                    "teacher_name": teacher_name,
                    "start_time": start_time,
                    "duration": duration
                }
            })

            console.log(response.data)
            alert('Aula editada com sucesso!');
            navigation.navigate('Index'); 
        } catch (error) {
            console.log('Erro ao editar uma aula', error);
        }
    }

    return(
        // <View>
        //     <Text>Tela de edição de aula</Text>
        //     <Button title="Sair do app" onPress={signOut} />
        //     <View><Text>O id é: {id}</Text></View>
        // </View>
        <ScrollView>
        <View style={styles.container}>
             <TouchableOpacity onPress={signOut} style={styles.buttonLogout}><AntDesign name="logout" size={24} color="#FFF" /></TouchableOpacity>
            <Text style={styles.text}>Edição de Aula</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                  accessibilityLabel="Name"
                  placeholder="Nome"
                  placeholderTextColor='#b4b4b4'
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                />
                
                <TextInput 
                  placeholder="Descrição"
                  placeholderTextColor='#b4b4b4'
                  style={styles.input}
                  value={description}
                  onChangeText={setDescription}
                />
                <TextInput 
                  placeholder="Nome do Professor"
                  placeholderTextColor='#b4b4b4'
                  style={styles.input}
                  value={teacher_name}
                  onChangeText={setTeacher_name}
                />
                <TextInput 
                  placeholder="Hora de Início"
                  placeholderTextColor='#b4b4b4'
                  style={styles.input}
                  value={start_time}
                  onChangeText={setStart_time}
                />
                <TextInput 
                  placeholder="Duração"
                  placeholderTextColor='#b4b4b4'
                  style={styles.input}
                  value={duration}
                  onChangeText={setDuration}
                />
                <TouchableOpacity style={styles.button} onPress={handleEdit}>
                    { loadingAuth ? (
                        <ActivityIndicator size={25} color="#FFF"/>
                    ) : (
                      <Text style={styles.buttonText}>Editar</Text>  
                    )}
                </TouchableOpacity>
            </View>

        </View>
        </ScrollView>
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
        fontSize: 26,
        color: '#FFF',
        marginTop: 80
    },
    inputContainer:{
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 14,
    },
    input:{
        width: '95%',
        height: 54,
        backgroundColor: '#484888',
        marginBottom: 12,
        borderRadius: 8,
        paddingHorizontal: 8,
        color: '#FFF'
    },
    button:{
        width: '95%',
        height: 54,
        backgroundColor: '#8d8786',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 131
    },
    buttonText:{
        fontSize: 18,
        color: '#FFF'
    },
    buttonLogout:{
        backgroundColor: '#26254D',
        height: 30,
        width: 27,
        marginLeft: 270,
        marginTop: 10
    }
})