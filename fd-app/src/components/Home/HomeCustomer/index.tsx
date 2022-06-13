import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { logout } from '../../../util/logout';
import { userContext } from '../../../util/userInfoContext';
import { Button } from '../../Button';
import { ClassesList } from './ClassesList';

import { styles } from './styles';

export function HomeCustomer() {

  const userInfo = useContext(userContext)

  const navigation = useNavigation()

    useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      console.log(e)

      if(e.data.action.type !== 'NAVIGATE'){
        e.preventDefault()

        Alert.alert("Saindo...", "Deseja realmente sair?",
        [{ text: 'Sim', onPress: () => navigation.dispatch(e.data.action) },
        { text: 'Não', onPress: () => { return } }
        ])
        
      } 
    })
  }, [navigation])

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