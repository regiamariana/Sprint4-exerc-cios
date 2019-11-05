import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from "./pages/signin";
import MainScreen from "./pages/main";
import Temas from "./pages/temas";
import Cadastro from "./pages/cadastro"

const AuthStack = createStackNavigator({
    Sign: {screen: SignInScreen},
});

const MainNavigator = createBottomTabNavigator({
    Main: {
        screen: MainScreen,
    },
    Temas: {
        screen: Temas
    },
    Cadastro: {
        screen: Cadastro
    }
})



export default createAppContainer(

    createSwitchNavigator(
        {
            AuthStack,
            MainNavigator,
        },
        {
            initialRouteName: 'AuthStack'
        },
    )
);