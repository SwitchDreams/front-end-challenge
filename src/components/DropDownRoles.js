import { React } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { Fontisto } from "@expo/vector-icons/build/Icons";
// Icon

const DropDownRoles = ({ pickerValue, setValue }) => {
    return (
        <View style={styles.textInputContainer}>
            <Fontisto
                name="person"
                size={24}
                color="black"
                style={styles.icons}
            />

            <Picker
                selectedValue={pickerValue}
                style={styles.textInput}
                onValueChange={(itemValue) => setValue(itemValue)}
            >
                <Picker.Item label="Professor" value="teacher" />

                <Picker.Item label="Cliente" value="customer" />
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection: "row",
        alignSelf: "center",
        backgroundColor: "#fff",
        width: "80%",
        borderRadius: 20,
        marginTop: "2.5%",
        paddingRight: 15,
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

export default DropDownRoles;
