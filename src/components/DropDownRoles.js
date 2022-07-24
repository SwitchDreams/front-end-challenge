import React, {useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { View, StyleSheet } from "react-native";
import * as Font from 'expo-font';
import Poppins_Regular from '../../assets/fonts/Poppins-Regular.ttf';
import { Picker } from "@react-native-picker/picker";


SplashScreen.preventAutoHideAsync();

const DropDownRoles = ({ pickerValue, setValue}) => {

    return (



        <Picker
            selectedValue={pickerValue}
            style={styles.textInput}
            onValueChange={(itemValue) => setValue(itemValue)}

        >
            <Picker.Item label="Professor" value="teacher" />

            <Picker.Item label="Cliente" value="customer" />
        </Picker>

    );

};

const styles = StyleSheet.create({

    textInput: {
        flexDirection: "row",
        alignSelf: "center",
        backgroundColor: "#191919",
        width: '65%',
        height:47,
        borderRadius: 15,
        marginTop: 15,
        paddingRight: 15,
        paddingHorizontal:13,
        color: "#4C4C4C",
        borderColor:'#000',


    },
});

export default DropDownRoles;
