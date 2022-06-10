import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  titleText: String
  isLoading: boolean
}

export function Button({ titleText, isLoading, disabled, style, ...rest }: Props) {
  return (
    <View style={disabled && styles.disabled}>

      <TouchableOpacity activeOpacity={0.4}
        style={[styles.container, style]} {...rest}
        disabled={isLoading || disabled}

      >
        {isLoading ? <ActivityIndicator color={'white'} /> :
          <Text style={styles.title}>{titleText}</Text>
        }

      </TouchableOpacity>
    </View>
  );
}