import { React } from "react";
import { TextInput, View, StyleSheet } from "react-native";



const NameInput = ({ setValue }) => {
    return (
        <View style={styles.textInputContainer}>

            <TextInput
                style={styles.textInput}
                placeholder="Nome Completo..."
                onChangeText={(text) => setValue(text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: "row",
        alignSelf: "center",
        backgroundColor: "#191919",
        width: 233,
        height:47,
        borderRadius: 15,
        marginTop: 21,
        paddingRight: 15,
    },

    textInput: {
        flex: 1,
        borderRadius: 20,
        borderWidth: 0,
        paddingTop: 15,
        paddingRight: 0,
        paddingBottom: 10,
        paddingLeft: 5,
        marginLeft: 10,
        backgroundColor: "#191919",
        color: "#4C4C4C",
    },
});

export default NameInput;
