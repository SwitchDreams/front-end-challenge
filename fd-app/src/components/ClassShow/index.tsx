import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { Button } from '../Button';
import { testImg } from '../ClassThumbnail/testImg';

import { styles } from './styles';

interface Props {
  className?: String,
  professorName?: String,
  startTime?: String,
  imgSource?: string, // A string in base64 containing the image
  weekDays?: String,
  description?: String,
  navigation: any,
}

export function ClassShow(props: Props) {

  return (
    <View style={styles.container}>

      <ScrollView style={{width: '100%'}} contentContainerStyle={styles.scrollContainer}>

        {/* <Image source={{uri: props.imgSource}}  */}
        <Image source={{ uri: testImg }}
          style={styles.img} />

        <View style={styles.classDataContainer}>
          <View style={styles.classInfo}>
            <Text style={styles.classTitle}>
              {/* {props.className} */}
              Zumba
            </Text>

            <Text style={styles.classProfessor}>
              {/* {props.professorName} */}
              Prof. Thiago
            </Text>
          </View>

          <View style={styles.classTime}>
            <Text style={styles.classTimeText}>
              {/* {props.weekDays} */}
              Seg - Qua - Sex
            </Text>

            <Text style={styles.classTimeText}>
              {/* {props.startTime} */}
              12h as 13h
            </Text>
          </View>

          <Text style={styles.description}>
            {/* {props.description} */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper ligula at facilisis scelerisque. Fusce non maximus magna. Nunc sodales ante a ipsum euismod pretium. Pellentesque eget dui nulla. Quisque tincidunt ut purus ac aliquam. Quisque et pulvinar odio, et tempus nisl. Proin dignissim leo sed rutrum facilisis
          </Text>
        </View>

        <Button titleText='Inscrever-se' isLoading={false} onPress={() => props.navigation.navigate('InscricaoModal', { requestSuccess: true })}/>
      </ScrollView>
    </View>
  );
}

