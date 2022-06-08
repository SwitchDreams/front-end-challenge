import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { House, ListBullets, SignOut } from 'phosphor-react-native';
import React from 'react';
import { View } from 'react-native';
import { theme } from '../../theme';
import { ClassEdit } from '../ClassEdit';
import { ClassIndex } from '../ClassIndex';
import { ClassShow } from '../ClassShow';
import { Home } from '../Home';
import { Logo } from '../Logo';
import { ClassesNavigator } from './ClassesNavigator';

import { styles } from './styles';

export function TabBar() {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      sceneContainerStyle={styles.container}
      screenOptions={options}
      initialRouteName='Home'
    >
      <Tab.Screen name='Home' component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => <House size={size} color={color} weight={focused ? 'fill' : 'regular'} />
        }} />


      <Tab.Screen name='ClassIdx' component={ClassesNavigator}
        options={{
          title: 'Aulas disponíveis',
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => <ListBullets size={size} color={color} weight={focused ? 'bold' : 'regular'} />
        }}
      />
      <Tab.Screen name='Exit' component={ClassEdit} options={{
        title: 'Sair',
        tabBarIcon: ({ focused, color, size }) => <SignOut size={size} color={color} weight={focused ? 'fill' : 'regular'} />
      }} />

    </Tab.Navigator>

  );
}

const options: BottomTabNavigationOptions = {

  headerTitleAlign: 'center',
  headerShadowVisible: false,

  headerBackgroundContainerStyle: styles.header,

  headerTitleStyle: styles.headerTitleStyle,
  headerTintColor: theme.color.text,

  headerStyle: {
    backgroundColor: 'transparent',
  },

  tabBarStyle: styles.tabBar,
  tabBarActiveTintColor: theme.color.text,

  // tabBarShowLabel: false,
  tabBarLabelStyle: styles.tabBarLabel,
  tabBarHideOnKeyboard: true,
}