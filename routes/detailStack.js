import { createStackNavigator } from 'react-navigation-stack';
import Detailscreen from '../screens/detailscreen.js';
import Popscreen from '../screens/popscreen';

const screens = {
    Details: {
        screen: Detailscreen,
        navigationOptions: {
          },
    }, 
    Pop: {
        screen: Popscreen
    },
}

const DetailStack = createStackNavigator(screens);

export default DetailStack;