import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Homescreen from '../screens/homescreen.js'
import Optionscreen from '../screens/optionscreen'

const screens = {
    Home: {
        screen: Homescreen
    }, 
    About: {
        screen: Optionscreen
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);