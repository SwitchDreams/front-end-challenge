import { useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { myScreenOptions } from '../../util/screenOptions';
import { userContext } from '../../util/userInfoContext';
import { CategoryIndex } from '../CategoryIndex';
import { CategoryShow } from '../CategoryShow';
import { ClassEdit } from '../ClassEdit';
import { ClassShow } from '../ClassShow';
import { Logo } from '../Logo';
import { CreateCategory } from './CreateCategory';
import { CreateUser } from './CreateUser';
import { HomeCustomer } from './HomeCustomer';

import { styles } from './styles';

export function Home() {

  const route = useRoute()

  const userInfo = useContext(userContext)

  const Stack = createNativeStackNavigator()

  // console.log(userInfo)

  // let diffScreen = myScreenOptions
  return (

    <Stack.Navigator screenOptions={myScreenOptions}>
      <Stack.Screen name='initialHome' component={HomeCustomer}
        options={{
          headerTitle: () => <Logo logoStyle={styles.logoStyle} />
        }}
      />

      <Stack.Screen name='CreateUser' component={CreateUser}
        options={{
          title: 'Criar Usuário',
        }}
      />

      <Stack.Screen name='ShowClass' component={ClassShow}
        options={{
          title: 'Dados da Aula'
        }}
      />
      <Stack.Screen name='CreateCategory' component={CreateCategory}
        options={{
          title: 'Criar Categoria'
        }}
      />

      <Stack.Screen name='EditCategory' component={CreateCategory}
        options={{
          title: 'Editar Categoria',
          headerBackVisible: false,
        }}
      />

      <Stack.Screen name='CreateClass' component={ClassEdit}
        options={{
          title: 'Criar aula'
        }}
      />

      <Stack.Screen name='IndexCategory' component={CategoryIndex}
        options={{
          title: 'Categorias'
        }}
      />

      <Stack.Screen name='ShowCategory' component={CategoryShow}
        options={{
          headerShown: false,
          presentation: 'transparentModal',
          animation: 'fade',
        }}
      />

    </Stack.Navigator>

  );
}