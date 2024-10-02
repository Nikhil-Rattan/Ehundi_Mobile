import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './AuthStack';
import MainStackNavigator from './MainStack';
import { useSelector } from 'react-redux';
import { AllReducer } from '../types/redux';

const RouteScreen = () => {
    // const { userData } = useSelector((state: AllReducer) => state.auth || {});
    const user = useSelector((state) => state.signIn.signData);
    return (
        <NavigationContainer>
            {user?.token != null  ? MainStackNavigator() : AuthStackNavigator()}
        </NavigationContainer>
    );
};

export default RouteScreen;
