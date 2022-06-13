import React from 'react';
import { Image, Text, View } from 'react-native';
import { theme } from '../../theme';
import { getPaddedTime, getWeekDay } from '../../util/timeFunctions';

import { styles } from './styles';
import { testImg } from './testImg';

interface Props {
  className: string,
  professorName: string,
  startTime: string,
  imgSource?: string, // A string in base64 containing the image
  weekDays?: string,
  duration: number
}


export function ClassThumbnail({ className, professorName, startTime, imgSource, duration, weekDays }: Props) {

  const classDate = new Date(startTime)
  const classEnd = new Date(classDate.getTime() + duration * 1000)

  
  return (
    <View style={styles.container}>

      <Image source={imgSource ?
        { uri: imgSource } : require('../../assets/closeup-of-athlete-running-on-a-gym.jpg') 
        } style={styles.thumb} />

      <View style={styles.classInfo}>

        <View style={[styles.classData, styles.nameInfo]}>

          <Text numberOfLines={1} style={[styles.text, { fontSize: theme.fontSizes.medium }]}>
            {className}
          </Text>

          <Text  numberOfLines={1} style={[styles.text, { fontSize: theme.fontSizes.small }]}>
            Prof. {professorName? professorName : 'não especificado'}
          </Text>
        </View>

        <View style={[styles.classData, styles.timeInfo]}>

          <Text style={[styles.text, { fontSize: theme.fontSizes.regular }]}>

            {getWeekDay(classDate.getDay())}
          </Text>
          <Text numberOfLines={1} style={[styles.text, { fontSize: theme.fontSizes.small }]}>
            {getPaddedTime(classDate)} as {getPaddedTime(classEnd)}
          </Text>

        </View>
      </View>

    </View>
  );
}