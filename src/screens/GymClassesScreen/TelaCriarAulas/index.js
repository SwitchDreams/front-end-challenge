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
    TouchableOpacity

} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Modal from "react-native-modal";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";

// icons
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ModalInput from "../../../components/Modalnput";


export default function TelaCriarAulas(props) {
    //Getting screen dimensions of user
    const { width, heigth } = Dimensions.get("screen");
    const [gymclassdata,setGymClassData] = useState('');
    const [isFetching, setFetching] = useState('');

    // Update the flatlist with the data from gym classes

    useEffect(() => {
        featchData();
    },[] );

    const featchData= () => {
        setFetching(true);
        fetch(`https://switch-gym.herokuapp.com/api/gym_classes`, {
            method: "GET",

            headers: new Headers({
                Accept: "application/json",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setGymClassData(data);
                setFetching(false);
            })
            .catch((error) => {
                console.log(error);
                setFetching(false);
            });




    };





    // State of body request



    async function deleteClass(id,) {
        const token = await AsyncStorage.getItem("bearer_token");
        await fetch(`https://switch-gym.herokuapp.com/api/gym_classes/${id}`, {
            method:'DELETE',




            headers: new Headers({
                Authorization:token,
                'Access-Control-Allow-Origin': 'https://switch-gym.herokuapp.com',





            })

        });
        featchData();


    }
    const [modalVisible1, setModalVisible1] = useState(false);

    const [updateCategoryName,setUpdateCategoryName] = useState("");
    const [updateCategoryDescription,setUpdateCategoryDescription] = useState("");
    const [id1,setId] = useState("");
    const [start_time, setStarTime] = useState("");
    const [duration, setDuration] = useState('');
    const [teacher_name,setTeacherName] = useState("");
    const [class_name, setClassName] = useState("");
    const [class_description, setClassDescription] = useState("");

    const today = new Date();
    const date = today.getDate()+'-'+(today.getMonth()+1+'-'+today.getFullYear());
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date+' '+time;


    async function updateClass() {
        const token = await AsyncStorage.getItem("bearer_token");
        await fetch(`https://switch-gym.herokuapp.com/api/gym_classes/59`, {
            method:'PATCH',



            body: JSON.stringify({
                "gym_class": {
                    "category_id": id1,
                    "start_time": dateTime,
                    "duration": duration,
                    "teacher_name":teacher_name,
                    "name": class_name,
                    "description": class_description
                },
            }),


            headers: new Headers({
                Authorization:token,
                'Content-Type': "application/json;charset=utf-8"



            })




        });



    }

    async function getId(id){
        const id1 = id;
        setModalVisible1(true);
        console.log(id1);
    }


    // This params is used to confirm the action of user, if he click on category then the category_id is passed for this params and  is used on flatlist  to exibe just gym classes from that category id

    const {id} = props.route.params;

    return (

        <View style={styles.centeredView} nestedScrollEnabled={true}>
            <StatusBar style="light" />
            <View style={styles.welcomeView}>
                <Text style={styles.textWelcome}>
                    Seja bem vindo Professor
                </Text>

            </View>

            <FlatList
                data={gymclassdata}
                nestedScrollEnabled={true}
                keyExtractor={(gymclassdata) => gymclassdata.id}
                contentContainerStyle={{ flexGrow: 1 }}
                renderItem={({ item }) => {
                    return(
                        <View>
                            {item.category_id === id&&
                            <View style={styles.categoriesCard}>
                                {/* here the image can be passed to the api and placed in the image source below, but don't have image on api, so i put a generic image in all categories */}
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
                                        onPress={() => deleteClass(item.id)}
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
                                    <Text style={styles.textCard}> {item.name}</Text>
                                    <Text style={styles.descriptionCard}>
                                        - {item.duration/60} min
                                    </Text>
                                    <MaterialCommunityIcons
                                        name="timer-outline"
                                        size={21}
                                        color="black"
                                        style={styles.clockIcon}
                                    />
                                    <Image source={require('../../../..//assets/imgs/crossfit.png')} style={styles.alterIcon}/>

                                    <Text style={ styles.textHalter}> - Begginer </Text>

                                </View>
                            </View>
                            }
                        </View>

                    );}}
            />



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
                        alignSelf:'center'
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
                        <Text style={styles.modalText}>Editar Aula</Text>
                        {/* TextInput  Gym class name*/}
                        <ModalInput
                            placeholder='Nome da aula...'
                            setValue={setClassName}

                        />
                        {/* TextInput  Gym class description*/}
                        <ModalInput
                            placeholder='Breve Descrição...'
                            setValue={setClassDescription}

                        />

                        <View style={styles.textInputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Duração da aula em minutos..."
                                onChangeText={(number) => setDuration(number*60)}
                            />
                        </View>

                        <ModalInput
                            placeholder='Nome do professor...'
                            setValue={setTeacherName}

                        />


                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={updateClass}
                        >
                            <Text style={styles.textStyle}>
                                Editar Aula
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </Modal>


        </View>
    );
}
