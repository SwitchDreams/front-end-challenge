import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props {
  title: string,
  showBackButton: boolean
  goBack: () => void
}

export function Header({title, showBackButton, goBack} : Props) {

  return (
    <SafeAreaView style={styles.container}>

      {
        showBackButton ? (
          <TouchableOpacity style={styles.backButtonIcon} onPress={goBack}>
            <ArrowLeft color={theme.color.icon} size={theme.iconSize} weight='regular' />
          </TouchableOpacity>) : (<></>)
      }

      <Text style={styles.titleText}>
        {title}
        {/* 4P */}
      </Text>

    </SafeAreaView>
  );
}