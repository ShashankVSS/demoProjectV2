import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import DetailStack from './detailStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Details: {
        screen: DetailStack,
    },
})

export default createAppContainer(RootDrawerNavigator);