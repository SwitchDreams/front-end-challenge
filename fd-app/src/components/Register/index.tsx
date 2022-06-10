import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native';
import { api } from '../../libs/api';
import { theme } from '../../theme';
import { Button } from '../Button';
import { FormBox } from '../FormBox';
import { KeyboardAvodingWrapper } from '../KeyboardAvodingWrapper';
import { Logo } from '../Logo';

import { styles } from './styles';

export function Register({ navigation }: any) {
  const [userEmail, setEmail] = useState('')
  const [userPassword, setPassword] = useState('')
  const [userRepassword, setRepassword] = useState('')

  const [isButtonLoading, setIsButtonLoading] = useState(false)

  async function handleUserRegister() {
    setIsButtonLoading(true)

    try {
      const response = await api.post('/users', {
        user: {
          email: userEmail,
          password: userPassword,
          role: 'customer'
        }
      })

      setIsButtonLoading(false)
      Alert.alert('Sucesso!', "O usuário foi criado com sucesso!")
      navigation.navigate('Login')

    } catch (error) {
      setIsButtonLoading(false)
      Alert.alert('Erro!', 'Ocorreu um erro ao processar a solicitação.')
    }

  }

  return (
    // <KeyboardAvodingViewWrapper>
      <View style={styles.container}>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <ArrowLeft
            color='white'
            size={theme.iconSize}
            weight='regular'
          />
        </TouchableOpacity>

    {/* <KeyboardAvoidingView  style={{ width: '100%', height: '100%'}} behavior='padding'> */}
        <Logo />

        <View style={styles.header}>
          <Text style={styles.headerTitle}>Cadastro</Text>
          <Text style={styles.headerDescription}>Digite os seus dados para completar o cadastro em nosso app</Text>
        </View>

        <View style={styles.registerForm}>

          <FormBox title='Email'
            placeholder='exemplo@email.com'
            returnKeyType='next'
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='email-address'
            style={{ marginBottom: 5 }}

            onChangeText={setEmail}
          />
          <FormBox title='Senha'
            placeholder="Senha"
            secureTextEntry={true}
            returnKeyType='next'
            caretHidden={true}
            style={{ marginBottom: 5 }}
            autoCapitalize='none'

            onChangeText={setPassword}
          />
          {/* <FormBox title='Digite a senha novamente'
          placeholder='Senha'
          secureTextEntry={true}
          returnKeyType='done'
          caretHidden={true}

          autoCapitalize='none'
          onChangeText={setRepassword}
          // onBlur={() => { userPassword === userRepassword ? console.log("igual") : console.log('difere')}}
        /> */}

        </View>

        <Button titleText='Cadastrar' isLoading={false} onPress={handleUserRegister} />
        {/* </KeyboardAvoidingView> */}


      </View>
    // </KeyboardAvodingViewWrapper>

  );
}