import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { api } from '../../libs/api';
import { Button } from '../Button';
import { FormBox } from '../FormBox';
import { KeyboardAvodingWrapper } from '../KeyboardAvodingWrapper';
import { Logo } from '../Logo';

import { styles } from './styles';

export function Login({ navigation }: any) {
  const [userEmail, setEmail] = useState('')
  const [userPassword, setPassword] = useState('')
  const [isButtonLoading, setIsButtonLoading] = useState(false)

  function focusNext() { }

  async function handleUserLogin() {
    setIsButtonLoading(true)

    try {

      (api.defaults.headers as any).Authorization = ''

      // console.log(userEmail, userPassword)
      const response = await api.post(`/users/login?timestamp=${new Date().getTime()}`, {
        user: {
          email: userEmail,
          password: userPassword
        }
      })

      let AUTH_TOKEN = response.headers['authorization'];
      (api.defaults.headers as any).Authorization = AUTH_TOKEN;

      // console.log(api.defaults.headers)
      // console.log(response.data)
      navigation.navigate('Logged', {
        id: response.data.id,
        email: userEmail,
        role: response.data.role
      })

    } catch (error: any) {

      // console.log(error)
      Alert.alert('Dados inválidos', 'Email ou senha estão incorretos! Digite novamente.')
    }
    setIsButtonLoading(false)
  }

  return (

    // <KeyboardAvodingViewWrapper>
    <View style={styles.container}>

      <Logo />

      <Text style={styles.header}>Login</Text>

      <View style={styles.loginForm}>

        <FormBox title='Email'
          placeholder="Email"
          returnKeyType='next'
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={setEmail}
          keyboardType='email-address'
          // autoFocus={true}
          style={{ marginBottom: 5 }}
        />

        <FormBox title='Senha'
          placeholder="Senha"
          secureTextEntry={true}
          returnKeyType='done'
          caretHidden={true}

          onChangeText={setPassword}
        />

      </View>

      <Button
        // onPress={handleUserLogin}
        onPress={handleUserLogin}
        titleText="Entrar" isLoading={isButtonLoading} />

      <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Register')}>

        <Text style={styles.title}>Não possui conta? Crie uma agora!</Text>
      </TouchableOpacity>
    </View>
    // </KeyboardAvodingViewWrapper>
  );
}