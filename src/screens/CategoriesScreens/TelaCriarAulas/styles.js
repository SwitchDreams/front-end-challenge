import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
const styles = StyleSheet.create({

    imgBackground:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',


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
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    modalView: {
        margin: 20,
        backgroundColor: "#f8f8ff",
        borderRadius: 20,
        padding: 35,

        shadowColor: "#000",
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
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        marginTop:20,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    categoriesCard:{
        borderRadius:20,
        backgroundColor:'#f8f8ff',
        marginVertical:30,
        marginHorizontal:10,
        width:300,
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
        color:'#fff',
        fontWeight:'700',
        fontSize:14,
        lineHeight:20,
        position:'absolute',
        left:17,
        top:14,
    },
    imgCard:{

        width:300,
        height:180,
        alignSelf:'center',
        resizeMode:'contain',
        bottom:0
    },
    footerimgcard:{

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor:'#000',
        width:300,
        height:80,
        alignSelf:'center',
        position:'absolute',
        bottom:0,
        marginBottom:0
    }


});

export default styles;
