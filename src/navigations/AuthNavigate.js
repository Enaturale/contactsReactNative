import React from 'react';
import {createStackNavigator}  from '@react-navigation/stack'
import {View, Text}  from 'react-native'
import { LOGIN, REGISTER } from '../constants/routeNames';
import Login from '../Screens/Login';
import SignUp from '../Screens/Register';




const AuthNavigate  = () => {
    const Authentication = createStackNavigator();
    return(
        <Authentication.Navigator>
            <Authentication.Screen name={LOGIN} component={Login}></Authentication.Screen>
            <Authentication.Screen name={REGISTER} component={SignUp}></Authentication.Screen>
        </Authentication.Navigator>

    );
}

export default AuthNavigate;