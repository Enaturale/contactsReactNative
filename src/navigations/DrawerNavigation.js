import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigate from './HomeNavigate';




const Draweravigate  = () => {
    const DrawerNavigate = createDrawerNavigator();
    return(
        <DrawerNavigate.Navigator>
            <DrawerNavigate.Screen name="Home" component={HomeNavigate}></DrawerNavigate.Screen>
            
        </DrawerNavigate.Navigator>

    );
}

export default Draweravigate ;