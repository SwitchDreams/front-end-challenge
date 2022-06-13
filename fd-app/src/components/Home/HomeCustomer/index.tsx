import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { userContext } from '../../../util/userInfoContext';
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

      <ScrollView style={{ width: '100%' }} contentContainerStyle={styles.scrollContainer}>

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

        {(userInfo.role === 'teacher' || userInfo.role === 'admin') &&
          <Button
            style={styles.button}
            titleText={'Mostrar Categorias'}
            isLoading={false}
            onPress={() => navigation.navigate('IndexCategory' as never)}
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

        <ScrollView horizontal={true} style={{ width: "100%" }} contentContainerStyle={{ width: '100%', height: '100%' }}>
          <ClassesList userId={userInfo.id} myStyle={styles.listing} />
        </ScrollView>

      </ScrollView>
    </View>
  );
}