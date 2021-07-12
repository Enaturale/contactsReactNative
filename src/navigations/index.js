import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import AuthNavigate from './AuthNavigate';
import HomeNavigate from './HomeNavigate';
import Draweravigate from './DrawerNavigation';

const MainContainer = () => {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      {isLoggedIn ? <Draweravigate /> : <AuthNavigate/>}
    </NavigationContainer>
  );
};

export default MainContainer;
