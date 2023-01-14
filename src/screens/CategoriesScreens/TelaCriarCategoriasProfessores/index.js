import React, { useState, useEffect } from "react";
import {
    View,
    TextInput,
    Text,
    Alert,
    Dimensions,
    FlatList,
    Pressable,
    ScrollView,
    Image,
    TouchableOpacity,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";

// Components
import ModalCategories from "../../../components/ModalCategories";

// icons
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import ModalInput from "../../../components/Modalnput";

export default function TelaCriarCategorias(props) {
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
        Alert.alert("Sucesso", "Categoria criada");
        featchData();
    }

    // States of body request
    const [start_time, setStarTime] = useState("");
    const [duration, setDuration] = useState("");
    const [teacher_name, setTeacherName] = useState("");
    const [class_name, setClassName] = useState("");
    const [class_description, setClassDescription] = useState("");

    const today = new Date();
    const date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1 + "-" + today.getFullYear());
    const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;

    // Function responsible for creating gymclass
    async function createGymclass() {
        // from Login screen, this will be used to set teacher name automatically

        const token = await AsyncStorage.getItem("bearer_token");
        const res = await fetch(
            `https://switch-gym.herokuapp.com/api/gym_classes`,
            {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json;charset=utf-8",
                    Authorization: token,
                }),
                body: JSON.stringify({
                    gym_class: {
                        category_id: id1,
                        start_time: dateTime,
                        duration: duration,
                        teacher_name: teacher_name,
                        name: class_name,
                        description: class_description,
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
        Alert.alert("Sucesso", "Aula criada");
        featchData();
        toggleModal;
    }

    // Function responsible for delete categories
    const [categorydata, setCategoryData] = useState();
    const [isFetching, setFetching] = useState();

    // Update the flatlist with the data from categories

    useEffect(() => {
        featchData();
    }, []);

    const featchData = () => {
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
            method: "DELETE",

            headers: new Headers({
                Authorization: token,
                "Access-Control-Allow-Origin":
                    "https://switch-gym.herokuapp.com",
            }),
        });
        //  Here i could call a function that would delete classes when a category was deleted, but at the moment I won't do that
        featchData();
    }

    // State of modal edit category
    const [modalVisible1, setModalVisible1] = useState(false);
    // State of modal create class
    const [modalVisible2, setModalVisible2] = useState(false);

    // State of modal update category
    const [updateCategoryName, setUpdateCategoryName] = useState("");
    const [updateCategoryDescription, setUpdateCategoryDescription] =
        useState("");
    const [id1, setId] = useState(null);

    async function updateCategories() {
        const token = await AsyncStorage.getItem("bearer_token");
        const res = await fetch(
            `https//switch-gym.herokuapp.com/api/categories/${id1}`,
            {
                method: "PATCH",

                body: JSON.stringify({
                    category: {
                        name: updateCategoryName,
                        description: updateCategoryDescription,
                    },
                }),

                headers: new Headers({
                    Authorization: token,
                    "Content-Tye": "text/html; charset=utf-8",
                }),
            }
        );

        if (res.status != 200) {
            Alert.alert(
                "Usuario sem permissão",
                "Somente Professores ou admins podem adicionar conteúdos. Se você é um professor ou admin, mas não consegue adicionar conteúdo por favor entre em contato com nosso suporte"
            );

            return;
        }
    }
    // Get id of item selected and pass to function createCategories

    async function getId(id) {
        setId(id);
        console.log(id1);
        setModalVisible2(true);
    }
    // Get id of item selected and pass to function UpdateCategories
    async function getId1(id) {
        setId(id);
        console.log(id1);
        setModalVisible1(true);
    }

    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.centeredView} nestedScrollEnabled={true}>
            <StatusBar style="light" />
            <View style={styles.welcomeView}>
                <Text style={styles.textWelcome}>Seja bem vindo Professor</Text>

                <ModalCategories
                    onpress={createCategory}
                    icon={
                        <Feather
                            name="more-vertical"
                            size={28}
                            color="white"
                            style={styles.btnAddIcon}
                        />
                    }
                    modalTitle="Crie uma Categoria"
                    textInput={
                        <ModalInput
                            placeholder="Nome da categoria..."
                            setValue={setName}
                        />
                    }
                    textInput2={
                        <ModalInput
                            placeholder="Breve Descrição..."
                            setValue={setDescription}
                        />
                    }
                    modalBtnTitle="Criar Categoria"
                />
            </View>

            <FlatList
                data={categorydata}
                nestedScrollEnabled={true}
                keyExtractor={(categorydata) => categorydata.id}
                contentContainerStyle={{ flexGrow: 1 }}
                renderItem={({ item }) => (
                    <View style={styles.categoriesCard}>
                        {/* here the image can be passed through the api and placed in the image source below, but there is no image in the api, so I put a generic image in all categories*/}
                        <View style={{ marginVertical: 40 }}>
                            <Image
                                source={require("../../../../assets/imgs/BackgroundImageAulas.png")}
                                style={styles.imgCard}
                            />
                            <FontAwesome
                                name="trash"
                                size={24}
                                color="white"
                                style={styles.btnTrashIcon}
                                onPress={() => deleteCategories(item.id)}
                            />

                            <Feather
                                name="edit-2"
                                size={20}
                                color="white"
                                style={styles.btnEditIcon}
                                onPress={() => getId1(item.id)}
                            />
                        </View>

                        <View style={styles.footerimgcard}>
                            <Text style={styles.textCard}>{item.name}</Text>
                            <Text style={styles.descriptionCard}>
                                {item.description}
                            </Text>
                            <TouchableOpacity
                                style={styles.btnVerAulas}
                                onPress={() =>
                                    props.navigation.navigate(
                                        "Aulas Disponiveis",
                                        { id: item.id }
                                    )
                                }
                            >
                                <Text style={styles.textBtnVerAulas}>
                                    Ver aulas
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.btnCriarAulas}
                                onPress={() => getId(item.id)}
                            >
                                <Text style={styles.textBtnCriarAulas}>
                                    Criar aulas
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />

            {/*  this modals can't be used with component Model Categories because the modal categories doesn't accept position"absolute", i need create a new modal for this, but my time is over ;-; */}
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
                        <Text style={styles.modalText}>
                            Edite uma categoria
                        </Text>
                        {/* TextInput  category name*/}
                        <ModalInput
                            placeholder="Novo nome da categoria..."
                            setValue={setUpdateCategoryName}
                        />
                        {/* TextInput  category description*/}
                        <ModalInput
                            placeholder="Nova descrição da categoria..."
                            setValue={setUpdateCategoryDescription}
                        />

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

            {/*  this modals can't be used with component Model Categories because the modal categories doesn't accept position"absolute", i need create a new modal for this, but my time is over ;-; */}

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => {
                    setModalVisible2(!modalVisible2);
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
                            style={styles.btnCloseIcon}
                            onPress={() => setModalVisible2(false)}
                        />
                        <Text style={styles.modalText}>Crie uma Aula</Text>
                        {/* TextInput  category name*/}
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Nome da Aula..."
                                onChangeText={(text) => setClassName(text)}
                            />
                        </View>
                        {/* TextInput  category description*/}
                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Breve Descrição..."
                                onChangeText={(text) =>
                                    setClassDescription(text)
                                }
                            />
                        </View>

                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Duração da aula em minutos..."
                                onChangeText={(number) =>
                                    setDuration(number * 60)
                                }
                            />
                        </View>

                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Nome do professor"
                                onChangeText={(text) => setTeacherName(text)}
                            />
                        </View>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={createGymclass}
                        >
                            <Text style={styles.textStyle}>Criar Aula</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </Modal>
        </View>
    );
}
