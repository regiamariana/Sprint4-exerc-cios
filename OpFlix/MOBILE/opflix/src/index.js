import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import SignInScreen from "./pages/signin";
import MainScreen from './pages/main';
import Cadastro from './pages/cadastrar';

import Filmes from './pages/filmes';


const AuthStack = createStackNavigator({
    Sign: {screen: SignInScreen},
});

const NavegacaoDeCadastro = createStackNavigator({
    De: {
        screen: MainScreen,
    },
    Para: {
        screen: Cadastro,
    },
    
})

const MainNavigator = createBottomTabNavigator({
    Main: {
        screen: MainScreen,
    },
    Filmes: {
        screen: Filmes,
    }
})

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthStack,
            MainNavigator,
            NavegacaoDeCadastro
            
        },
        {
            initialRouteName: 'AuthStack'
        }
    ));