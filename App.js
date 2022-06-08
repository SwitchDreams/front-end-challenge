import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';


// importing screens
import TelaCadastro from './src/screens/TelaCadastro/index';
import TelaLogin from './src/screens/TelaLogin/index';
import TelaCriarAulas from './src/screens/CategoriesScreens/TelaCriarAulas';
import TelaEditDelAulas from './src/screens/CategoriesScreens/TelaEditDelAulas';
import TelaAulas from './src/screens/CategoriesScreens/TelaAulas';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function TelaProfesor(){

    return(

        <Drawer.Navigator>

            <Drawer.Screen
                name='Criar aulas'
                component={TelaCriarAulas}
            />

            <Drawer.Screen
                name='EditeOuDeleteAulas'
                component={TelaEditDelAulas}
            />

            <Drawer.Screen
                name='Aulas'
                component={TelaAulas}

            />

        </Drawer.Navigator>
    );
}


export default function App() {

    return (

        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen
                    name='CriarAulaProfessor'
                    component={TelaProfesor}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='Cadastro'
                    component={TelaCadastro}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name='Login'
                    component={TelaLogin}
                    options={{
                        headerShown: false
                    }}
                />



                <Stack.Screen
                    name='VerAulaAluno'
                    component={TelaAulas}
                />
            </Stack.Navigator>

        </NavigationContainer>

    );
}
