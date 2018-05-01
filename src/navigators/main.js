import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '@containers/home';
import NewScreen from '@containers/new';

export default StackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: ({navigation}) => ({
                header: null
            })
        },
        New: {
            screen: NewScreen,
            navigationOptions: ({navigation}) => ({
                title: `${navigation.state.params.title} Screen`,
            })
        }
    },
    {
        // headerMode: 'none'
    }
);