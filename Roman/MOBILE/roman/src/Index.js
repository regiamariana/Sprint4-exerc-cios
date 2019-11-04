import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AuthStack = createStackNavigator({
    Sign: {screen: SignInScreen},
});

export default createAppContainer(

    createSwitchNavigator(
        {
            AuthStack,
        },
        {
            initialRouteName: 'AuthStack'
        },
    )
);