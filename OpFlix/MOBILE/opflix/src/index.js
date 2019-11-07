import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import SignInScreen from "./pages/signin";
import MainScreen from './pages/main';
import Cadastro from './pages/cadastrar';

import Filmes from './pages/filmes';
import Series from './pages/series';
import Cinema from './pages/cinema';


const AuthStack = createStackNavigator({
    Sign: {screen: SignInScreen},
});

const a = createStackNavigator({
    Sign: {screen: Cadastro},
});

const NavegacaoDeCadastro = createStackNavigator({
    De: {
        screen: MainScreen,
    },
    Para: {
        screen: Cadastro,
    },
    Login: {
        screen: SignInScreen,
    }
    
})

const MainNavigator = createBottomTabNavigator({
    Main: {
        screen: MainScreen,
    },
    Filmes: {
        screen: Filmes,
    },
    Series: {
        screen: Series,
    },
    Cinema : {
        screen: Cinema,
    }
})

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthStack,
            MainNavigator,
            NavegacaoDeCadastro,
            a
            
        },
        {
            initialRouteName: 'AuthStack'
        }
    ));