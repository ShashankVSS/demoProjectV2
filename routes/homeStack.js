import { createStackNavigator } from 'react-navigation-stack';
import Homescreen from '../screens/homescreen.js'
import Optionscreen from '../screens/optionscreen'

const screens = {
    Home: {
        screen: Homescreen,
        navigationOptions: {
            headerShown:false
          },
    }, 
    Option: {
        screen: Optionscreen
    },
}

const HomeStack = createStackNavigator(screens);

export default HomeStack;