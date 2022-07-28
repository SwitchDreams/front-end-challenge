
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native-web";
const { width, heigth } = Dimensions.get("screen");
const styles = StyleSheet.create({

    imgBackground:{

        width:'100%',
        height:'95%',
        resizeMode: 'cover',
        backgroundColor:'#000',
        flex:0.9

    },

    containerInputs:{
        width:'100%',
        height:heigth,
        flex:1,
        marginVertical:'5%'
    },



});

export default styles;
