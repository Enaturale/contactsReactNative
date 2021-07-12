import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigate from './HomeNavigate';
import { HOME } from '../constants/routeNames';




const Draweravigate  = () => {
    const DrawerNavigate = createDrawerNavigator();
    return(
        <DrawerNavigate.Navigator>
            <DrawerNavigate.Screen name={HOME} component={HomeNavigate}></DrawerNavigate.Screen>
            
        </DrawerNavigate.Navigator>

    );
}

export default Draweravigate ;