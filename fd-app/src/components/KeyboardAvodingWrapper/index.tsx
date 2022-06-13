import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, } from 'react-native';

import { styles } from './styles';

interface Props {
  children: any
}

export function KeyboardAvodingWrapper({ children }: Props) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      
      <ScrollView style={{ width: '100%' }}
        contentContainerStyle={styles.innerContainer}
      >

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>

    </KeyboardAvoidingView>
  );
}