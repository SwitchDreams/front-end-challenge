import { StyleSheet } from "react-native";
const styles = StyleSheet.create({

    imgLogo:{

        marginTop:'5%',
        width:"60%",
        height:'30%',
        resizeMode: 'contain',
        alignSelf:'center',

    },
    title:{

        textAlign:'center',
        fontSize:20,
        marginBottom:'0.5%',
        marginTop:'3%',

    },
    icons:{
        color:'blue',
        paddingLeft:'4%',
        paddingTop:'0.5%',
        alignSelf:'center'
    },
    textInputContainer:{
        flexDirection: 'row',
        alignSelf:'center',
        backgroundColor: '#fff',
        width:'80%',
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
        backgroundColor: '#fff',
        color: '#000',
    },
    btnLogin:{
        Color:'#FFF',
        backgroundColor:'#1317DD',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'4%',
        borderRadius:20,
        width:'50%',
        aspectRatio: 10/2.5,
        alignSelf:'center',

    },
    BtnAjudaContainer:{

        flexDirection:'row',
        width:'80%',
        paddingLeft:75,
        marginTop:'0.5%',

        alignItems:'center',
        justifyContent:'center'

    },
    titleBtnLogin:{
        color: '#FFF',
        textAlign:'center'
    },
    titleBtnCadastro:{
        color: '#1317DD',
        fontSize:10,
    },
    titleAjuda:{
        fontSize:10,
    },


});

export default styles;
