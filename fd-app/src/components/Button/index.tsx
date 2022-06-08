import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  titleText: String
  isLoading: boolean
}

export function Button({ titleText, isLoading, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.4} style={styles.container} {...rest} disabled={isLoading}>

      {isLoading ? <ActivityIndicator color={theme.color.text}></ActivityIndicator> :
        <Text style={styles.title}>{titleText}</Text>
      }

    </TouchableOpacity>
  );
}