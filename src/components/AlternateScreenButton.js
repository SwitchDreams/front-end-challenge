// This component make possible the user chose one of two screens to go, the screens are Login or SignUp

import React, { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Poppins_Bold from '../../assets/fonts/Poppins-Bold.ttf';
import
{
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';



const  AltScreenBtn = ({ setLeft,setTop, setRight, setBottom, onpressLogin,onpressSignUp} ) => {

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
    return(
        <>
            <View style={styles.container} onLayout={onLayoutRootView}>

                <TouchableOpacity onPress={onpressLogin}>
                    <Text style={styles.login}> Login </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onpressSignUp}>
                    <Text style={styles.signUp}> Sign Up </Text>
                </TouchableOpacity>

            </View>

            <View style={{
                backgroundColor:'#5038AE',
                width:35,
                height:3,
                position:'absolute',
                left:setLeft,
                top:setTop,
                right:setRight,
                bottom:setBottom
            }}>

            </View>
        </>
    );


};




const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        position:'absolute',
        top:23,
        left:47,
    },
    login:{
        color:'#fff',
        fontFamily:'Poppins_Bold',
    },
    signUp:{
        color:'#fff',
        marginLeft:28,
        fontFamily:'Poppins_Bold',
    },
    selected:{

        left: {}
    },

});

export default AltScreenBtn;
