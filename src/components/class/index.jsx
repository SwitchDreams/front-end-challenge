import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Class({name, navigateDetail }){
    return(
        <View>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.text} onPress={navigateDetail} >{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 300,
        height: 54,
        backgroundColor: '#484888',
        marginBottom: 12,
        borderRadius: 8,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 18,
        color: '#FFF'
    }
})