import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Alert,
    Dimensions,
    FlatList,

    Image,
    TouchableOpacity

} from "react-native";


import styles from "./styles";
import { StatusBar } from "expo-status-bar";

// icons
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function TelaAulasAlunos(props) {
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

    // subscribe the user on class

    async function createGymClassUsers(id_class){

        const res = await fetch('http://switch-gym.herokuapp.com/api/gym_class_users',{
            method:'POST',
            headers: new Headers({

                'Content-Type': "application/json;charset=utf-8"
            }),
            body:JSON.stringify({
                "gym_class_user": {
                    "gym_class_id": id_class,
                    "user_id": id_user
                }

            })
        });
        if (res.status != 201) {
            Alert.alert('Erro ao cadastrar', 'Não foi possivel concluir o cadastro, certifique-se de ter prenchido todos os dados corretamente');


            return;
        }


    }




    const [gym_class_users_id, setGymClassUsersId] = useState('');
    async function getGymClassUsers(){

        await fetch('https://switch-gym.herokuapp.com/api/gym_class_users',{
            method:'GET',
            headers: new Headers({

                Accept: "application/json",
            })


        })

            .then((response) => response.json())
            .then((data) => {
                setGymClassUsersId(data);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);

            });



    }


    async function deleteGymClassUsers(id_class){
        await getGymClassUsers();

        const res = await fetch(`http://switch-gym.herokuapp.com/api/gym_class_users/${id_class}`,{
            method:'Delete',

            headers: new Headers({

                'Content-Type': "application/json;charset=utf-8"
            }),

        });
        if (res.status != 201) {
            Alert.alert('Erro ao cadastrar', 'Não foi possivel concluir o cadastro, certifique-se de ter prenchido todos os dados corretamente');


            return;
        }


    }












    // This params is used to confirm the action of user, if he click on category then the category_id is passed for this params and  is used on flatlist  to exibe just gym classes from that category id

    const {id} = props.route.params;
    // This is received from login, when the user make login your id  is collected and send  here to be used when the user subscribe a gymclass
    const {id_user} = props.route.params;

    return (

        <View style={styles.centeredView} nestedScrollEnabled={true}>
            <StatusBar style="light" />


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
                                </View>

                                <View style={styles.footerimgcard}>

                                    <Text style={styles.textCard}>{item.name}</Text>
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
                                    <TouchableOpacity
                                        style={styles.btnComecar}
                                        onPress={() => createGymClassUsers(item.id) }
                                    >
                                        <Text style={styles.textBtnComecar}>
                                            INSCREVER-SE
                                        </Text>
                                    </TouchableOpacity>


                                </View>
                            </View>
                            }
                        </View>

                    );}}
            />



        </View>
    );
}
