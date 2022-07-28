import React, { useState } from "react";
import { Button, Text, View, TouchableOpacity, StyleSheet, ScrollView, Pressable, TextInput, Dimensions } from "react-native";
import Modal from "react-native-modal";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
function ModalCategories({onpress, icon, icon2, textInput,textInput2,textInput3, textInput4, modalTitle, modalBtnTitle}) {

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (


        <View >
          
            <TouchableOpacity
                onPress={toggleModal}
                style={styles.btnAddIcon}
            >
                { icon }
            </TouchableOpacity>



            <Modal isVisible={isModalVisible}>
                <ScrollView
                    style={styles.ScrollViewContainer}


                >
                    <View style={styles.modalView}>
                        <FontAwesome
                            name="close"
                            size={24}
                            color="white"
                            style={styles.btnCloseIcon}
                            onPress={ toggleModal}
                        />


                        <Text style={styles.modalText}>{modalTitle}</Text>

                        {/* TextInput  for user*/}
                        {textInput}
                        {textInput2}
                        {textInput3}
                        {textInput4}

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={onpress}
                        >
                            <Text style={styles.textStyle}>
                                {modalBtnTitle}
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </Modal>
        </View>

    );
}
//Getting screen dimensions of user
const { width, heigth } = Dimensions.get("screen");
const styles = StyleSheet.create({

    ScrollViewContainer:{
        width: width,
        height: heigth,
        marginTop: 22,
        alignSelf:'center',
    },
    viewContainer:{
        position:'absolute'
    },
    btnAddIcon:{
        position:'relative',
        right:-150,
        marginHorizontal:'5%',
        marginLeft:20,
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
    btnCloseIcon:{
        position:'absolute',
        right:20,
        top:5,

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

});
export default ModalCategories;
