import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,


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
        textAlign:"center",
        color:'#000',
        fontWeight:'700',
        fontSize:14,
        lineHeight:20,
        position:'absolute',
        left:17,
        top:14,
    },
    descriptionCard:{
        color:'#000',
        fontWeight:'100',
        fontSize:14,
        lineHeight:10,
        position:'absolute',
        left:17,
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
    }


});

export default styles;
