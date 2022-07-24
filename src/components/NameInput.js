import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { TextInput, View, StyleSheet } from "react-native";
import * as Font from 'expo-font';
import Poppins_Regular from '../../assets/fonts/Poppins-Regular.ttf';


SplashScreen.preventAutoHideAsync();

const NameInput = ({ setValue }) => {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                await Font.loadAsync({Poppins_Regular: require('../../assets/fonts/Poppins-Regular.ttf')});
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }

        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
        // This tells the splash screen to hide immediately! If we call this after
        // `setAppIsReady`, then we may see a blank screen while the app is
        // loading its initial state and rendering its first pixels. So instead,
        // we hide the splash screen once we know the root view has already
        // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }



    return (
        <View
            style={styles.textInputContainer}
            onLayout={onLayoutRootView}
        >

            <TextInput
                style={styles.textInput}
                placeholder="Nome Completo..."
                onChangeText={(text) => setValue(text)}
                placeholderTextColor='#4c4c4c'
            />
        </View>
    );

};


const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: "row",
        alignSelf: "center",
        backgroundColor: "#191919",
        width: '65%',
        height:47,
        borderRadius: 15,
        marginTop: 0,
        paddingRight: 15,
    },
    textInput: {
        flex: 1,
        width: '65%',
        borderRadius: 20,
        borderWidth: 0,
        paddingTop: 15,
        paddingRight: 0,
        paddingBottom: 10,
        paddingLeft: 13,
        marginLeft: 0,
        fontFamily:'Poppins_Regular',
        color: "#4C4C4C",
    },
});

export default NameInput;
