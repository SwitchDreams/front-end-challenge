import { React } from "react";
import { TouchableOpacity,Text,StyleSheet } from "react-native";





const SignInSignUpBtn = ({labelBtn,onpress }) => {
    return (
        <TouchableOpacity
            onPress={onpress}
            style={styles.btn}
        >

            <Text style={styles.titleBtn}>
                {labelBtn}
            </Text>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn:{
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
    titleBtn:{
        color: '#FFF',
        textAlign:'center'
    },
});

export default SignInSignUpBtn;
