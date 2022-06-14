import React from 'react';
import { StyleProp, Text, TextInput, TextInputProps, TextStyle, TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface TxtInputProps extends TextInputProps {
  title: string,
  formStyle?: StyleProp<TextStyle>
}

export function FormBox({ title, style, formStyle, ...rest } : TxtInputProps) {
  return (
    <View style={[styles.container, style]}>

      <Text style={styles.title}>
        {title}
      </Text>

      <TextInput
        style={[styles.input, formStyle]}
        selectionColor={theme.color.text}
        placeholderTextColor={theme.color.text3}
        {...rest}
      />

    </View>
  );
}