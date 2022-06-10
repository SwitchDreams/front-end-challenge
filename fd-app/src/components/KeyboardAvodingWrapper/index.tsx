import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, } from 'react-native';

import { styles } from './styles';

interface Props {
  children: any
}

export function KeyboardAvodingWrapper({ children }: Props) {
  return (
    <KeyboardAvoidingView style={styles.container}
      // behavior={Platform.OS == 'ios' ? 'padding' : 'position'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableWithoutFeedback style={styles.innerContainer} onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>

    </KeyboardAvoidingView>
  );
}