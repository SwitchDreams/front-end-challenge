import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { userContext } from '../../../util/userInfoContext';
import { isCustomer } from '../../../util/utilFunctions';
import { Button } from '../../Button';
import { ClassesList } from './ClassesList';

import { styles } from './styles';

export function HomeCustomer() {

  const userInfo = useContext(userContext)

  const navigation = useNavigation()

  function getUserName() {
    const end = userInfo.email.lastIndexOf('@')
    return userInfo.email.substring(0, end)
  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Bem vindo {getUserName()}!</Text>

      {(userInfo.role === 'teacher' || userInfo.role === 'admin') &&
        <Button
          style={styles.button}
          titleText={'Criar Aula'}
          isLoading={false}
          onPress={() => navigation.navigate('CreateClass' as never)}
        />
      }

      {(userInfo.role === 'teacher' || userInfo.role === 'admin') &&
        <Button
          style={styles.button}
          titleText={'Criar Categoria'}
          isLoading={false}
          onPress={() => navigation.navigate('CreateCategory' as never)}
        />
      }

      {userInfo.role === 'admin' &&
        <Button
          style={styles.button}
          titleText={'Criar Usuário'}
          isLoading={false}
          onPress={() => navigation.navigate('CreateUser' as never)}
        />

      }
      <Text style={[styles.text, { alignSelf: 'flex-start', marginLeft: 25 }]}>Suas aulas</Text>

      <ClassesList userId={userInfo.id} myStyle={styles.listing} />

    </View>
  );
}