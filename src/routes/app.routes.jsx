import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../pages/Dashboard';
import Index from '../pages/Index';

const Stack = createNativeStackNavigator();

function AppRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Index' component={Index} />
            <Stack.Screen name='Dashboard' component={Dashboard} />
        </Stack.Navigator>
    )
}

export default AppRoutes;

/**
 * Telas que usuários logados poderão ter acesso.
 */