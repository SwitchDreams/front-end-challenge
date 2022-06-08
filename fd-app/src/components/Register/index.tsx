import { ArrowLeft } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../../theme';
import { Button } from '../Button';
import { FormBox } from '../FormBox';
import { Logo } from '../Logo';

import { styles } from './styles';

export function Register({ navigation }: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <ArrowLeft
          color='white'
          size={theme.iconSize}
          weight='regular'  
        />
      </TouchableOpacity>

      <Logo/>

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
        <FormBox title='Digite a senha novamente'
          placeholder='Senha'
          secureTextEntry={true}
          returnKeyType='done'
          caretHidden={true}

          autoCapitalize='none'
          onChangeText={setRepassword}
          // onBlur={() => { password === repassword ? console.log("igual") : console.log('difere')}}
        />

      </View>

      <Button titleText='Cadastrar' isLoading={false} />

    </View>
  );
}