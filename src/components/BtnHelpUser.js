import { React } from "react";
import { View,Text,StyleSheet } from "react-native";





const BtnHelpUser = ({txt,txtBtn,onpress},) => {
    return (
        <View style={styles.btnContainer}>
            <Text pre style={styles.titleLabel}>
                {txt}
            </Text>




            <Text
                onPress={onpress}
                style={styles.titleTxtBtn}
            >

                {txtBtn}

            </Text>


        </View>

    );
};

const styles = StyleSheet.create({
    btnContainer:{

        flexDirection:'row',
        width:'80%',
        paddingLeft:75,
        marginTop:'0.5%',

        alignItems:'center',
        justifyContent:'center'

    },
    titleLabel:{
        fontSize:10,
    },
    titleTxtBtn:{
        color: '#1317DD',
        fontSize:10,
    },
});

export default BtnHelpUser;
