import React from "react";
import { NavigationContainer } from '@react-navigation/native'; //https://reactnavigation.org/docs/getting-started/

import StackRoutes from './stack.routes';

const Routes = () => (
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
)

export default Routes;