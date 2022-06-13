import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';


// importing screens
import TelaCadastro from './src/screens/TelaCadastro/index';
import TelaLogin from './src/screens/TelaLogin/index';
import TelaAulas from './src/screens/CategoriesScreens/TelaCategoriasAlunos';
import { setStatusBarHidden } from 'expo-status-bar';
import TelaCriarCategoriasProfessores from './src/screens/CategoriesScreens/TelaCriarCategoriasProfessores/index';
import TelaCriarAulas from './src/screens/GymClassesScreen/TelaCriarAulas/index';
import TelaCategoriasAlunos from './src/screens/CategoriesScreens/TelaCategoriasAlunos';
import TelaAulasAlunos from './src/screens/GymClassesScreen/TelaAulas';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function TelaCategoriaProfesor(){

    return(

        <Drawer.Navigator>

            {/* Displayed for teachers or adims  */}

            <Drawer.Screen
                name='Criar Categorias'
                component={TelaCriarCategoriasProfessores}
                options={{headerShown: false}}
            />

            <Drawer.Screen
                name='Aulas Disponiveis'
                component={TelaCriarAulas}
            />





        </Drawer.Navigator>
    );
}


export default function App() {

    return (

        <NavigationContainer>

            <Stack.Navigator>


                {/* Displayed for all users  */}
                <Stack.Screen
                    name='Cadastro'
                    component={TelaCadastro}
                    options={{
                        headerShown: false
                    }}
                />
                {/* Displayed for all users  */}
                <Stack.Screen
                    name='Login'
                    component={TelaLogin}
                    options={{
                        headerShown: false,
                        setStatusBarHidden
                    }}
                />
                {/*Displayed categories for teachers or admins  */}

                <Stack.Screen
                    name='CriarCategoriasProfessores'
                    component={TelaCategoriaProfesor}
                    options={{
                        headerShown: false
                    }}
                />
                {/*Displayed categories for customers  */}

                <Stack.Screen
                    name='Categorias'
                    component={TelaCategoriasAlunos}
                />

                {/*Displayed classess for customers  */}

                <Stack.Screen
                    name='Aulas'
                    component={TelaAulasAlunos}
                    options={{
                        headerShown: false,
                        setStatusBarHidden
                    }}
                />
            </Stack.Navigator>

        </NavigationContainer>

    );
}
