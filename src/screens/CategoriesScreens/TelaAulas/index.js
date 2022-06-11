import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, Dimensions, SafeAreaView, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar/src/StatusBar';
import styles from './styles';

export default function  TelaAulas() {

    //  Discovering the dimension of screen to create a responsive screen
    const {width, heigth} = Dimensions.get('screen');

    const [categorydata,setCategoryData] = useState();
    const [isFetching, setFetching] = useState();

    // Update the flatlist with the data from categories

    useEffect(() => {
        featchData();
    },[] );

    const featchData= () => {
        setFetching(true);
        fetch(`https://switch-gym.herokuapp.com/api/categories`, {
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

    return (

        <SafeAreaView style={styles.centeredView}>
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

                        </View>

                        <View style={styles.footerimgcard}>
                            <Text style={styles.textCard}>{item.name}</Text>
                            <Text style={styles.descriptionCard}>
                                {item.description}
                            </Text>
                        </View>
                    </View>
                )}
            />

        </SafeAreaView>

    );
}
