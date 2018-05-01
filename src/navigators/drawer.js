import React, { Component } from 'react';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import SideMenu from '@components/sidemenu';

export default DrawerNavigator(
    {
    },
    {
        contentComponent: ({navigation}) => <SideMenu navigation={navigation}/>,
        drawerBackgroundColor: 'transparent',
        navigationOptions: {
            headerTintColor: '#FFF',
        },
    }
);