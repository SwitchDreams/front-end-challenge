import { React, useState, useEffect} from "react";
import { TouchableOpacity,Text,StyleSheet } from "react-native";
import * as Font from 'expo-font';









const SignInSignUpBtn = ({labelBtn,onpress }) => {

    useEffect(() => {
        return Font.loadAsync({
            'poppins-bold': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),

        });
    });

    return (
        <TouchableOpacity
            onPress={onpress}
            style={styles.btn}
        >

            <Text style={styles.titleBtn}>
                {labelBtn}

            </Text>

        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#5038AE',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        width:232,
        height:40,
        marginTop: 21.5,
        alignSelf:'center',
        marginBottom:20

    },
    titleBtn:{
        color: '#191919',
        textAlign:'center',
        fontFamily: 'poppins-bold'

    },
});

export default SignInSignUpBtn;
