import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default function SignIn(){
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
               />
               <TextInput
                 placeholder='Sua senha'
                 style={styles.input}
                 placeholderTextColor='#FFF'
                 secureTextEntry={true}
               />

                <TouchableOpacity style={styles.button}>
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