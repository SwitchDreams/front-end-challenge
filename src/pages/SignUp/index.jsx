import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput,  TouchableOpacity, ActivityIndicator } from "react-native";
import Select from '@redmin_delishaj/react-native-select';
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigation } from "@react-navigation/native";

export default function SignUp(){
    const navigation = useNavigation();
    const { loadingAuth, registerUserCustormer, registerUserTeaAdm  } = useContext(AuthContext);
    const [selectItem, setSelectItem] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const data = [
        { text: 'customer', value: 'customer' },
        { text: 'teacher', value: 'teacher' },
        { text: 'admin', value: 'admin' },
      ];

      const config = {
        fontSize: 14,
        backgroundColor: '#484888',
        textColor: '#FFF',
        selectedBackgroundColor: 'white',
        selectedTextColor: 'black',
        selectedFontWeight: 'normal',
        borderRadius: 8,
        placeholderTextColor: '#FFF'
      }

      async function handleRegister(){
        if(email === '' || password === ''){
            return;
        }

        if(selectItem === '' || selectItem === 'customer'){
            await registerUserCustormer({email, password});
        } else if(selectItem === 'teacher' || selectItem === 'admin'){
            await registerUserTeaAdm({ email, password, selectItem });
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Cadastro de Usuário</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                  placeholder="Digite seu email"
                  placeholderTextColor='#FFF'
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                />
                <TextInput 
                  placeholder="Senha"
                  placeholderTextColor='#FFF'
                  style={styles.input}
                  secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
                />
                <Select
                  data={data}
                  onSelect={value => setSelectItem(value)}
                  value={selectItem}
                  style={styles.select}
                  config={config}
                  width={300}
                  placeholder={'Selecione...'}
                />
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    { loadingAuth ? (
                        <ActivityIndicator size={25} color="#FFF"/>
                    ) : (
                      <Text style={styles.buttonText}>Acessar</Text>  
                    )}
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.textLogin}>Já tem conta? Faça login</Text>
                </TouchableOpacity>
            </View>
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
        fontSize: 26,
        color: '#FFF'
    },
    textLogin:{
        color: '#FFF'
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
        marginTop: 8,

    },
    buttonText:{
        fontSize: 18,
        color: '#FFF'
    },
    buttonLogin:{
        marginTop: 8
    }
})