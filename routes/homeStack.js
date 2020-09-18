import { createStackNavigator } from 'react-navigation-stack';
import Homescreen from '../screens/homescreen.js';
import Optionscreen from '../screens/optionscreen';
import Header from '../shared/header'
import React from 'react';

const screens = {
    Home: {
        screen: Homescreen,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title=''/>, 
                headerTransparent: true,
            }
        }
    }, 
    Option: {
        screen: Optionscreen
    },
}

const HomeStack = createStackNavigator(screens);

export default HomeStack;