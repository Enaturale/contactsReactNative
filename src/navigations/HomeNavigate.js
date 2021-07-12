import React from 'react';
import {createStackNavigator}  from '@react-navigation/stack'
import {View, Text}  from 'react-native'
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT,SETTINGS } from '../constants/routeNames';
import Contacts from '../Screens/Contacts';
import ContactDetail from '../Screens/ContactDetails';
import CreateContact from '../Screens/CreateContact';
import Settings from '../Screens/Settings';




const HomeNavigate  = () => {
    const HomeNavigation= createStackNavigator();
    return(
        <HomeNavigation.Navigator initialRouteName="Contacts">
            <HomeNavigation.Screen name={CONTACT_LIST} component={Contacts}></HomeNavigation.Screen>
            <HomeNavigation.Screen name={CONTACT_DETAIL} component={ContactDetail}></HomeNavigation.Screen>
            <HomeNavigation.Screen name={CREATE_CONTACT} component={CreateContact}></HomeNavigation.Screen>
            <HomeNavigation.Screen name={SETTINGS} component={Settings}></HomeNavigation.Screen>
        </HomeNavigation.Navigator>

    );
}

export default HomeNavigate ;