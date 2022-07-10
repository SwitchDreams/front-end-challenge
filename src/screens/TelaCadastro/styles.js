
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native-web";
const { width, heigth } = Dimensions.get("screen");
const styles = StyleSheet.create({

    imgBackground:{

        width:width,
        height:'100%',
        resizeMode: 'contain',
        backgroundColor:'#000',
        flex:1

    },
    containerInputs:{
        width:width,
        marginVertical:'5%'





    },

    titleSpinner:{
        color:'#fff',
        position: 'absolute',
        left: 140,
        top: 380,
        opacity:0.5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'

    }

});

export default styles;
