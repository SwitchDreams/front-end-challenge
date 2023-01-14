import { React } from "react";
import { TextInput, View, StyleSheet } from "react-native";



const ModalInput = ({ setValue,placeholder }) => {
    return (
        <View style={styles.textInputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder ={placeholder}
                onChangeText={(text) => setValue(text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: "row",
        backgroundColor: "#fff",
        width: "80%",
        borderRadius: 20,
        marginTop: "2.5%",
        
    },
    icons: {
        color: "blue",
        paddingLeft: "4%",
        paddingTop: "0.5%",
        alignSelf: "center",
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
        backgroundColor: "#fff",
        color: "#000",
    },
});

export default ModalInput;
