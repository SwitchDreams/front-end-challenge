import React, { useState, useEffect } from "react";
import {
    View,
    TextInput,
    Text,
    Alert,
    ImageBackground,
    Dimensions,
    FlatList,
    Pressable,
    ScrollView,
    Image,

} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";

// icons
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";


export default function TelaCriarAulas() {
    //Getting screen dimensions of user
    const { width, heigth } = Dimensions.get("screen");

    // States of body request

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");


    // Function responsible for creating category
    async function createCategory() {
        const token = await AsyncStorage.getItem("bearer_token");

        const res = await fetch(
            `http://switch-gym.herokuapp.com/api/categories/`,
            {
                method: "POST",

                headers: new Headers({
                    "Content-Type": "application/json;charset=utf-8",
                    Authorization: token,
                }),
                body: JSON.stringify({
                    category: {
                        name: name,
                        description: description,
                    },
                }),
            }
        );
        if (res.status != 201) {
            Alert.alert(
                "Usuario sem permissão",
                "Somente Professores ou admins podem adicionar conteúdos. Se você é um professor ou admin, mas não consegue adicionar conteúdo por favor entre em contato com nosso suporte"
            );

            return;
        }
        Alert.alert('Sucesso', 'Categoria criada');
        featchData();

    }

    // Function responsible for delete categories
    const [categorydata,setCategoryData] = useState();
    const [isFetching, setFetching] = useState();

    // Update the flatlist with the data from categories

    useEffect(() => {
        featchData();
    },[] );

    const featchData= () => {
        setFetching(true);
        fetch(`http://switch-gym.herokuapp.com/api/categories`, {
            method: "GET",

            headers: new Headers({
                Accept: "application/json",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setCategoryData(data);
                setFetching(false);
            })
            .catch((error) => {
                console.log(error);
                setFetching(false);
            });




    };






    // State of body request



    async function deleteCategories(id) {
        const token = await AsyncStorage.getItem("bearer_token");
        await fetch(`https://switch-gym.herokuapp.com/api/categories/${id}`, {
            method:'DELETE',




            headers: new Headers({
                Authorization:token,
                'Access-Control-Allow-Origin': 'https://switch-gym.herokuapp.com',





            })

        });
        featchData();


    }
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);

    const [updateCategoryName,setUpdateCategoryName] = useState("");
    const [updateCategoryDescription,setUpdateCategoryDescription] = useState("");
    const [id1,setId] = useState('');

    async function updateCategories() {
        const token = await AsyncStorage.getItem("bearer_token");
        await fetch(`http//switch-gym.herokuapp.com/api/categories/${id1}`, {
            method:'PATCH',



            body: JSON.stringify({
                "category": {
                    "name": updateCategoryName,
                    "description": updateCategoryDescription,
                },
            }),


            headers: new Headers({
                Authorization:token,
                "Content-Type": "application/json",


            })




        });



    }

    async function getId(id){
        const id1 = id;
        setModalVisible1(true);
        console.log(id1);
    }




    return (

        <View style={styles.centeredView} nestedScrollEnabled={true}>
            <StatusBar style="light" />
            <View style={styles.welcomeView}>
                <Text style={styles.textWelcome}>
                    Seja bem vindo Professor
                </Text>
                <Feather
                    name="more-vertical"
                    size={28}
                    color="white"
                    style={styles.addIcon}
                    onPress={() => setModalVisible(true)}

                />
            </View>

            <FlatList
                data={categorydata}
                nestedScrollEnabled={true}
                keyExtractor={(categorydata) => categorydata.id}
                contentContainerStyle={{ flexGrow: 1 }}
                renderItem={({ item }) => (
                    <View style={styles.categoriesCard}>
                        {/* here the image can be passed throstyle={styles.trashIcon}/>ugh the api and placed in the image source below, but don't have image on api, so i put a generic image in all categories */}
                        <View style={{ marginVertical: 40 }}>
                            <Image
                                source={require("../../../../assets/imgs/BackgroundImageAulas.png")}
                                style={styles.imgCard}
                            />
                            <FontAwesome
                                name="trash"
                                size={24}
                                color="white"
                                style={styles.trashIcon}
                                onPress={() => deleteCategories(item.id)}
                            />
                            <Feather
                                name="edit-2"
                                size={20}
                                color="white"
                                style={styles.editIcon}
                                onPress={() => getId(item.id)}
                            />
                        </View>

                        <View style={styles.footerimgcard}>
                            <Text style={styles.textCard}>{item.name}</Text>
                            <Text style={styles.descriptionCard}>
                                {item.id}
                            </Text>
                        </View>
                    </View>
                )}
            />

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <ScrollView
                    style={{
                        width: width,
                        height: heigth,
                        marginTop: 22,
                        alignSelf: "center",
                    }}
                >
                    <View style={styles.modalView}>
                        <FontAwesome
                            name="close"
                            size={24}
                            color="white"
                            style={styles.closeicon}
                            onPress={() => setModalVisible(false)}
                        />
                        <Text style={styles.modalText}>Crie uma categoria</Text>
                        {/* TextInput  category name*/}
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Nome da categoria..."
                                onChangeText={(text) => setName(text)}
                            />
                        </View>
                        {/* TextInput  category description*/}
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Breve Descrição..."
                                onChangeText={(text) => setDescription(text)}
                            />
                        </View>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={createCategory}
                        >
                            <Text style={styles.textStyle}>
                                Criar Categoria
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible1}
                onRequestClose={() => {
                    setModalVisible1(!modalVisible1);
                }}
            >
                <ScrollView
                    style={{
                        width: width,
                        height: heigth,
                        marginTop: 22,
                        alignSelf: "center",
                    }}
                >
                    <View style={styles.modalView}>
                        <FontAwesome
                            name="close"
                            size={24}
                            color="white"
                            style={styles.closeicon}
                            onPress={() => setModalVisible1(false)}
                        />
                        <Text style={styles.modalText}>Edite uma categoria</Text>
                        {/* TextInput  category name*/}
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Nome atualizado da categoria..."
                                onChangeText={(text) => setUpdateCategoryName(text)}
                            />
                        </View>
                        {/* TextInput  category description*/}
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Descrição atualizada da categoria..."
                                onChangeText={(text) => setUpdateCategoryDescription(text)}
                            />
                        </View>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={updateCategories}
                        >
                            <Text style={styles.textStyle}>
                                Editar Categoria
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>

            </Modal>


        </View>
    );
}
