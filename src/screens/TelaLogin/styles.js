import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const {width, heigth} = Dimensions.get('screen');
const styles = StyleSheet.create({

    imgBackground:{

        width:'100%',
        height:'95%',
        resizeMode: 'cover',
        backgroundColor:'#000',
        flex:2

    },

    containerInputs:{
        width:'100%',
        height:'100%',
        flex:1,
        marginTop:'5%'
    },


});

export default styles;
