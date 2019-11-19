import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'


import SignInScreen from "./pages/signin";
import MainScreen from './pages/main';
import Cadastro from './pages/cadastrar';
import Adm from './pages/pgAdm'; 
import LancamentoAdm from './pages/lancamentosAdm';

import Filmes from './pages/filmes';
import Series from './pages/series';
import Cinema from './pages/cinema';
import Netflix from './pages/netflix';



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
    Home: {
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
    },
    Netflix: {
        screen: Netflix,
    }

},
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            showLabel: true,
            labelStyle: {fontSize: 20,
                justifyContent: "center",
                bottom: 10,
            },
        activeTintColor: "black",
        inactiveTintColor: "white",
        inactiveBackgroundColor: "maroon",
        activeBackgroundColor: "#510005",
        style:{
        width: '100%',
        height: 50,},
        },
    },
);



const AdmNavigator = createBottomTabNavigator({
    Adm: {
        screen: Adm,
    },
    

})

const AdmNavegacao = createStackNavigator({
    de: {
        screen: Adm,
    },
    para: {
        screen: LancamentoAdm,
    },

})

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthStack,
            MainNavigator,
            NavegacaoDeCadastro,
            a,
            AdmNavigator,
            AdmNavegacao
            
            
        },
        {
            initialRouteName: 'AuthStack'
        }
    ));