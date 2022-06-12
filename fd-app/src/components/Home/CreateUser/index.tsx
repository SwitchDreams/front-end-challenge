import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Dropdown } from 'sharingan-rn-modal-dropdown';
import { api } from '../../../libs/api';
import { theme } from '../../../theme';
import { myTheme } from '../../../util/theme';
import { feedbackModal } from '../../../util/utilFunctions';
import { Button } from '../../Button';
import { FormBox } from '../../FormBox';

import { styles } from './styles';

type UserRole = 'customer' | 'admin' | 'teacher';

export function CreateUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<UserRole>('customer');

  const [buttonLoading, isButtonLoading] = useState(false)

  const navigation = useNavigation();

  const typesList = [
    { label: 'Cliente', value: 'customer' },
    { label: 'Admin', value: 'admin' },
    { label: 'Professor', value: 'teacher' },
  ]

  async function handleUserRegister() {

    try {
      isButtonLoading(true)
      const response = await api.post('/users', {
        "user" : {
          "email": email,
          "password": password,
          "role": userType
        }
      });

      feedbackModal(true, navigation.goBack)
    } catch (error) {
      feedbackModal(false, navigation.goBack)
    }
    isButtonLoading(false)
  }

  return (

    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContainer}>

        <Text style={styles.text}>Informe os dados do novo usuário abaixo</Text>

        <FormBox
          title='Email'
          placeholder='exemplo@email.com'
          returnKeyType='next'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
          style={styles.formBox}

          onChangeText={setEmail}
        />

        <FormBox
          title='Senha'
          secureTextEntry={true}
          returnKeyType='next'
          caretHidden={true}
          autoCapitalize='none'
          style={[styles.formBox, styles.lastBox]}
          onChangeText={setPassword}
          placeholder="Senha"
        />

        <View style={styles.alo}>
          <Dropdown

            label='Tipo de Usuário'
            data={typesList}
            value={userType}
            onChange={(type) => setUserType(type)}

            paperTheme={myTheme}
            borderRadius={0}
            primaryColor={'white'}
            itemTextStyle={styles.textItem}
            // textInputStyle={{fontSize: theme.fontSizes.regular, }}

            parentDDContainerStyle={styles.dropDown}
            selectedItemTextStyle={{color: theme.color.text}}

          />
        </View>


        <Button
          titleText={'Cadastrar Usuário'}
          isLoading={buttonLoading}
          style={styles.button}

          onPress={() => handleUserRegister()}
        />
      </ScrollView>
    </View>

  );
}