import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { TouchableOpacity,Text,StyleSheet } from "react-native";
import * as Font from 'expo-font';
import Poppins_Bold from '../../assets/fonts/Poppins-Bold.ttf';





SplashScreen.preventAutoHideAsync();

const SignInSignUpBtn = ({labelBtn,onpress }) => {

    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                // Pre-load fonts, make any API calls you need to do here
                await Font.loadAsync({Poppins_Bold: require('../../assets/fonts/Poppins-Bold.ttf')});
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
        <TouchableOpacity
            onPress={onpress}
            style={styles.btn}
            onLayout={onLayoutRootView}
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
        width: '65%',
        height:47,
        marginTop: 21.5,
        alignSelf:'center',
        marginBottom:20

    },
    titleBtn:{
        color: '#191919',
        textAlign:'center',
        fontFamily: 'Poppins_Bold'

    },
});

export default SignInSignUpBtn;
