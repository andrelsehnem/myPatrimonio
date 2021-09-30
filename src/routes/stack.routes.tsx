import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import colors from '../styles/colors';

//aqui importa as telas
import { Splash } from '../pages/splash';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator 
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: colors.fundo
            }
        }}       
    >
        <stackRoutes.Screen
            name={'Splash'}
            component={Splash}
        />


    </stackRoutes.Navigator>
)

export default AppRoutes;

/*
Bom sempre entrar nos links e ver se ainda é os mesmos comandos pra instalar
EXPLICAÇÃO DE COMO USAR (NLW5 01:00:00) - https://reactnavigation.org/docs/getting-started
primeiro roda:
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context

DEPOIS - https://reactnavigation.org/docs/hello-react-navigation
npm install @react-navigation/native-stack
*/