import {Dimensions}  from "react-native";
import { StyleSheet } from "react-native";
const { width, heigth } = Dimensions.get("screen");


const styles = StyleSheet.create({
    welcomeView:{
        flexDirection: 'row',
        justifyContent:'center',
        width:'100%',
        marginTop:'10%',

    },

    textWelcome:{
        color:'#fff',
        alignSelf:'center',
        fontSize:18,
        fontWeight:'300',
        lineHeight:40,
        marginLeft:50,
    },
    card:{

        borderRadius:20,
        borderWidth:1,
        borderColor:'#FFF',
        backgroundColor:'#eeeee4',
        width: 300,
        height:150,
    },
    textInputContainer:{
        flexDirection: 'row',
        alignSelf:'center',
        backgroundColor: '#FFF',
        width:'100%',
        borderRadius:20,
        marginTop:'2.5%',
        paddingRight:15
    },
    textInput:{
        flex:1,
        borderRadius:20,
        borderWidth:0,
        paddingTop: 15,
        paddingRight: 0,
        paddingBottom: 10,
        paddingLeft: 5,
        marginLeft: 10,
        backgroundColor: '#FFF',

    },
    centeredView: {
        flex: 1,
        width:width,
        height:heigth,

        backgroundColor:'#000'

    },
    modalView: {


        backgroundColor: "#000",
        borderRadius: 20,
        padding: 35,
        alignSelf:'center',




        shadowColor: "#FFF",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    closeicon:{
        position:'absolute',
        right:10,
        top:5,

    },
    addIcon:{
        position:'relative',
        right:0,
        top:4, // This save the object pass in TelaCriarAulas


        marginLeft:20,
    },
    trashIcon:{
        position:'absolute',
        top:8,
        right:10
    },
    editIcon:{
        position:'absolute',
        top:36,
        right:10
    },

    clockIcon:{
        position:'absolute',
        paddingTop:1,
        left:118,
        bottom:30,
    },
    alterIcon:{
        position:'absolute',
        paddingTop:1,
        left:17,
        bottom:24.5,
        width:30,
        height:30

    },
    textHalter:{
        position:'absolute',
        paddingTop:1,
        left:44,
        bottom:32,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#fff",
        marginTop:20,
    },
    textStyle: {
        color: "#000",
        fontWeight: "bold",
        textAlign: "center",
    },

    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color:'#FFF'

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
        top:5,
    },
    descriptionCard:{
        color:'#000',
        fontFamily: 'Lato_100Thin_Italic',
        fontSize:14,
        lineHeight:20,
        position:'absolute',
        left:140,
        bottom:27,
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


});

export default styles;
