import { StyleSheet } from "react-native";
import { Lato_300Light, Lato_400Regular, Lato_700Bold, Lato_700Bold_Italic } from "@expo-google-fonts/lato";
import { Dimensions } from "react-native";

//  Discovering the dimension of screen to create a responsive screen
const {width, heigth} = Dimensions.get('screen');

const styles = StyleSheet.create({

    centeredView: {
        flex: 1,
        width:width,
        height:heigth,
        backgroundColor:'#000'

    },

    categoriesCard:{
        borderRadius:20,
        marginVertical:30,
        marginHorizontal:10,
        width:300,
        backgroundColor:'#',
        alignSelf:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5

    },
    textCard:{

        width:120,
        height:20,
        color:'#000',
        fontWeight:'700',
        fontSize:14,
        lineHeight:20,
        position:'absolute',
        left:12,
        top:5,
        fontFamily:'Lato_700Bold',

    },
    descriptionCard:{
        color:'#000',

        fontWeight:'100',
        fontSize:14,
        lineHeight:10,
        position:'absolute',
        left:12,
        bottom:28,
    },
    imgCard:{

        width:300,
        height:180,
        borderRadius: 10,
        resizeMode:'contain',
        backgroundColor:'#7F3FBF',
        bottom:0
    },
    footerimgcard:{

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor:'#fff',
        width:300,
        height:80,
        alignSelf:'center',
        position:'absolute',
        bottom:0,
        marginBottom:0
    },
    btnVerAulas:{
        position:'absolute',
        top:5,
        right:5,
        borderRadius:10,
        backgroundColor:'#000',
        width:114    ,
        height:40,
        color:'#fff',
        alignItems:'center',
        justifyContent:'center'

    },

    textBtnVerAulas:{

        color:'#fff',
        fontFamily: 'Lato_400Regular',




    },


});

export default styles;
