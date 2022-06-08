import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Image, ImageProps, Text, TextInput, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import { theme } from '../../theme';
import { Button } from '../Button';
import { FormBox } from '../FormBox';
import { Logo } from '../Logo';

import { styles } from './styles';

export function Login({ navigation }: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function focusNext() { }

  return (
    <View style={styles.container}>

      <Logo/>

      <Text style={styles.header}>Login</Text>

      <View style={styles.loginForm}>
        {/* <View style={[styles.formInfo, {marginBottom: 10}]} > */}

          {/* <Text style={styles.title}>
            Email
          </Text>

          <TextInput
            style={[styles.formBox,]}

            // style={theme.formBox}
            placeholder="Email"
            returnKeyType='next'
            autoCorrect={false}
            autoCapitalize='none'
            placeholderTextColor={theme.color.text3}
            onChangeText={setEmail}
            keyboardType='email-address'
          /> */}

          <FormBox title='Email' 
            placeholder="Email"
            returnKeyType='next'
            autoCorrect={false}
            autoCapitalize='none'
            onChangeText={setEmail}
            keyboardType='email-address'
            // autoFocus={true}
            style={{marginBottom: 5}}
          />

        {/* </View> */}

        {/* <View style={styles.formInfo} > */}

          {/* <Text style={styles.title}>
            Senha
          </Text>
          <TextInput
            style={[styles.formBox]}

            placeholder="Senha"
            secureTextEntry={true}
            returnKeyType='done'
            placeholderTextColor={theme.color.text3}
            caretHidden={true}

            onChangeText={setPassword}
          /> */}

          <FormBox title='Senha'
            placeholder="Senha"
            secureTextEntry={true}
            returnKeyType='done'
            caretHidden={true}

            onChangeText={setPassword}
          />

        {/* </View> */}

      </View>

      <Button onPress={() => navigation.navigate('Logged')} titleText="Entrar" isLoading={false} />

      <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Register')}>

        <Text style={styles.title}>Não possui conta? Crie uma agora!</Text>
      </TouchableOpacity>

    </View>
  );
}