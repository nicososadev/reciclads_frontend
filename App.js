import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from './views/Home';
import { Perfil } from './views/Perfil';
import { Cupones } from './views/Cupones';
import { Login } from './views/Login';

const Stack = createStackNavigator()

const StackScreenOptions = {
    headerTitle: 'ReciclAds',
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: '#2E9AFE'
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
        fontSize: 25,
        fontWeight: 'bold'
    }
}


const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login' screenOptions={StackScreenOptions}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Perfil' component={Perfil}/>
                <Stack.Screen name='Cupones' component={Cupones}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({

});

export default App;
