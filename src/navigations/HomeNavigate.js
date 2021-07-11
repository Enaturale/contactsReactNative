import React from 'react';
import {createStackNavigator}  from '@react-navigation/stack'
import {View, Text}  from 'react-native'

const Contacts =() => {
    return(
    <View>
        <Text> Contacts Page</Text>
    </View>
    )
}

const ContactDetail =() => {
    return(
    <View>
        <Text> ContactDetail</Text>
    </View>
    )
}


const CreateContact =() => {
    return(
    <View>
        <Text> Create Contact</Text>
    </View>
    )
}


const Settings =() => {
    return(
    <View>
        <Text> Settings</Text>
    </View>
    )
}


const HomeNavigate  = () => {
    const HomeNavigation= createStackNavigator();
    return(
        <HomeNavigation.Navigator>
            <HomeNavigation.Screen name="Contacts" component={Contacts}></HomeNavigation.Screen>
            <HomeNavigation.Screen name="ContactDetail" component={ContactDetail}></HomeNavigation.Screen>
            <HomeNavigation.Screen name="CreateContact" component={CreateContact}></HomeNavigation.Screen>
            <HomeNavigation.Screen name="Settings" component={Settings}></HomeNavigation.Screen>
        </HomeNavigation.Navigator>

    );
}

export default HomeNavigate ;