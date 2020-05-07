import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Success from './screens/Success';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                // screenOptions={{ headerShown: false }}
                initialRouteName='Home'
            >
                <Stack.Screen
                    name='Home'
                    options={{ title: 'Выберите любимые продукты' }}
                    component={Home}
                />
                <Stack.Screen name='Success' component={Success}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default StackNavigator;