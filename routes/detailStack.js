import { createStackNavigator } from 'react-navigation-stack';
import Detailscreen from '../screens/detailscreen.js';
import Popscreen from '../screens/popscreen';
import Header from '../shared/header'
import React from 'react';


const screens = {
    Details: {
        screen: Detailscreen,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title="Details"/>, 
                headerTransparent: true,
            }
        }
    }, 
    Pop: {
        screen: Popscreen
    },
}

const DetailStack = createStackNavigator(screens);

export default DetailStack;