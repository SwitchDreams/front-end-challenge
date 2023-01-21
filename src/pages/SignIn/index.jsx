import React, { useState, useContext } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';

export default function SignIn(){
    const { user } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        if(email === '' || password === ''){
            return;
        }
        alert("Email digitado: " + email);
    }

    return(
        <View style={styles.container}>
            <Image 
              style={styles.logo}
              source={require('../../assets/logo.png')}
            />

            <Text style={styles.text}>Faça seu login</Text>

            <View style={styles.inputContainer}>
            <TextInput
                 placeholder='Digite seu email'
                 style={styles.input}
                 placeholderTextColor='#FFF'
                 value={email}
                 onChangeText={setEmail}
               />
               <TextInput
                 placeholder='Sua senha'
                 style={styles.input}
                 placeholderTextColor='#FFF'
                 secureTextEntry={true}
                 value={password}
                 onChangeText={setPassword}
               />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Acessar</Text>
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
    logo:{
        marginBottom: 18
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
        height: 40,
        backgroundColor: '#484888',
        marginBottom: 12,
        borderRadius: 8,
        paddingHorizontal: 8,
        color: '#FFF'
    },
    text:{
        color: '#FFF'
    },
    button:{
        width: '95%',
        height: 40,
        backgroundColor: '#8d8786',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText:{
        fontSize: 18,
        color: '#FFF'
    }
})