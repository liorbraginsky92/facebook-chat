import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import LoginScreen from '@containers/auth/login';
import RegisterScreen from '@containers/auth/register';

export default StackNavigator(
    {
        Login: { screen: LoginScreen },
        Register: { screen: RegisterScreen }
    },
    {
        headerMode: 'none'
    }
);