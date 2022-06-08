
import React,{useState, useEffect} from 'react';
import { View, TextInput, Text, Alert, ImageBackground, Dimensions, FlatList,Pressable, ScrollView, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";
import styles from './styles';








export default function TelaCriarAulas() {
    const {width, heigth} = Dimensions.get('screen');

    // State of body request

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [modalVisible, setModalVisible] = useState();

    // Function responsible for creating category
    async function createcategory(){


        const token = await AsyncStorage.getItem("bearer_token");

        const res = await fetch(`http://switch-gym.herokuapp.com/api/categories`,{
            method:'POST',

            headers: new Headers({

                'Content-Type': "application/json;charset=utf-8",
                'Authorization': token

            }),
            body:JSON.stringify({
                "category": {
                    "name":  name,
                    "description": description
                }
            }),

        });
        if (res.status != 201) {
            Alert.alert('Usuario sem permissão',
                'Somente Professores ou admins podem adicionar conteúdos. Se você é um professor ou admin, mas não consegue adicionar conteúdo por favor entre em contato com nosso suporte');


            return;
        }
        // response for user
        Alert.alert('Categoria criada','Categoria criada com sucesso');
        setModalVisible(!modalVisible);




    }

    // State of body request
    const [categorydata,setCategoryData] = useState(null);


    useEffect(() => {



        fetch(`http://switch-gym.herokuapp.com/api/categories`,{
            method:'GET',

            headers: new Headers({

                Accept: 'application/json',


            }),

        })
            .then(Response => Response.json())
            .then(data => {
                setCategoryData(data);
            });
    });


    
    return (
        <ImageBackground style={styles.imgBackground} source={require('../../../../assets/imgs/BackgroundImageAulas.png')} blurRadius={5}>
            <View style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <ScrollView style={{ width:width, height:heigth, flex:1, marginTop: 22, alignSelf:'center'}}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>
                                Crie uma categoria
                            </Text>
                            {/* TextInput  category name*/}
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder='Nome da categoria...'
                                    onChangeText={text=>setName(text)}

                                />
                            </View>
                            {/* TextInput  category description*/}
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder='Breve Descrição...'
                                    onChangeText={text=>setDescription(text)}
                                />
                            </View>
                            <View style={styles.textInputContainer}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder='Breve Descrição...'
                                    onChangeText={text=>setDescription(text)}
                                />
                            </View>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={createcategory}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                        <FlatList
                            data={categorydata}
                            keyExtractor={(categorydata) => categorydata.id}
                            contentContainerStyle={{flexGrow:1}}
                            renderItem={({item}) =>
                                <View style={styles.categoriesCard}>
                                    {/* here the image can be passed through the api and placed in the image source below, but don't have image on api, so i put a generic image in all categories */}
                                    <View style={{marginVertical:40}} >

                                        <Image source={require('../../../../assets/imgs/BackgroundImageAulas.png')} style={styles.imgCard}/>
                                    </View>

                                    <View style={styles.footerimgcard}>
                                        <Text style={styles.textCard}>{item.name}</Text>
                                    </View>
                                </View>
                            }
                        />






                    </ScrollView>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );


}


