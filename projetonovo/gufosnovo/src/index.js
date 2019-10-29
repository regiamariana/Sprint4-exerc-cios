import MainScreen from './pages/main';
import ProfileScreen from './pages/profile';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation';

const MainNavigator = createBottomTabNavigator({
    Main: {
        screen: MainScreen,
    },
    Profile: {
        screen:ProfileScreen,
    }
});

export default createAppContainer(MainNavigator)