import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { ListBullets } from 'phosphor-react-native';
import React from 'react';
import { View } from 'react-native';
import { myScreenOptions } from '../../../util/screenOptions';
import { ClassEdit } from '../../ClassEdit';
import { ClassIndex } from '../../ClassIndex';
import { ClassShow } from '../../ClassShow';
import { Header } from '../../Header';
import { Logo } from '../../Logo';
import { BaseModal } from '../../Modals/BaseModal';

import { styles } from './styles';

export function ClassesNavigator() {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='Index' screenOptions={myScreenOptions}>
      <Stack.Screen name='Index' component={ClassIndex}
        options={{
          title: 'Lista de Aulas',
          // headerTitle: () => {
          //   // const title = getHeaderTitle (options, route.name);

          //   return (
          //     <Header
          //       // title={title}
          //       title='Bom dia'
          //       goBack={() => 1}
          //       showBackButton={false}
          //     />
          //   )
          // }

        }} />

      <Stack.Screen name='Show' component={ClassShow}
        options={{
          title: 'Dados da Aula',
        }}
      />

      <Stack.Screen name='Edit' component={ClassEdit}
        options={{
          title: 'Editar Aula'
        }}
      />

      <Stack.Group screenOptions={{ presentation: 'transparentModal', headerShown: false, animation: 'fade' }}>
        <Stack.Screen name={'SubscriptionModal'} component={BaseModal} />
      </Stack.Group>
    </Stack.Navigator>

  );
}
