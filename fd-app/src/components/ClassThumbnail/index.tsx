import React from 'react';
import { Image, Text, View } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';
import { testImg } from './testImg';

interface Props {
  className?: String,
  professorName?: String,
  startTime?: String,
  imgSource?: string, // A string in base64 containing the image
  weekDays?: String,
}


export function ClassThumbnail({ className, professorName, startTime, imgSource, weekDays }: Props) {

  return (
    <View style={styles.container}>

      <Image source={{ uri: testImg }} style={styles.thumb} />

      <View style={styles.classInfo}>

        <View style={[styles.classData, styles.nameInfo]}>

          <Text style={[styles.text, { fontSize: theme.fontSizes.medium }]}>
            {/* {className} */}
            Zumba
          </Text>

          <Text style={[styles.text, { fontSize: theme.fontSizes.small }]}>
            {/* Prof. {professorName} */}
            Prof. Ricardo
          </Text>
        </View>

        <View style={[styles.classData, styles.timeInfo]}>

          <Text style={[styles.text, { fontSize: theme.fontSizes.regular }]}>
            {/* {weekDays} */}
            Seg - Qua - Sex
          </Text>
          <Text style={[styles.text, { fontSize: theme.fontSizes.small }]}>
            {/* Começa as {startTime} */}
            Começa as 12h
          </Text>

        </View>
      </View>

    </View>
  );
}