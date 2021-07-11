import React from 'react';
import {createStackNavigator}  from '@react-navigation/stack'
import {View, Text}  from 'react-native'

const Login =() => {
    return(
    <View>
        <Text> Login Page</Text>
    </View>
    )
}

const SignUp =() => {
    return(
    <View>
        <Text> Signup Page</Text>
    </View>
    )
}
const AuthNavigate  = () => {
    const Authentication = createStackNavigator();
    return(
        <Authentication.Navigator>
            <Authentication.Screen name="Login" component={Login}></Authentication.Screen>
            <Authentication.Screen name="SignUp" component={SignUp}></Authentication.Screen>
        </Authentication.Navigator>

    );
}

export default AuthNavigate;