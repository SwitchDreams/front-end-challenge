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
        backgroundColor:'#5038AE',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        width:232,
        height:40,
        marginTop: 21.5,
        alignSelf:'center',

    },
    titleBtn:{
        color: '#191919',
        textAlign:'center'
    },
});

export default SignInSignUpBtn;
