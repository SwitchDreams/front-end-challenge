import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Class(){
    return(
        <View>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text}>Aula</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '95%',
        height: 54,
        backgroundColor: '#484888',
        marginBottom: 12,
        borderRadius: 8,
        paddingHorizontal: 8,
        //color: '#FFF'
    },
    text:{
        color: '#FFF'
    }
})