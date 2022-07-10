import { React } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

// Icon

const DropDownRoles = ({ pickerValue, setValue }) => {
    return (
        <View style={styles.textInputContainer}>


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
        backgroundColor: "#191919",
        width: 233,
        height:47,
        borderRadius: 15,
        marginTop: 15,
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

export default DropDownRoles;
