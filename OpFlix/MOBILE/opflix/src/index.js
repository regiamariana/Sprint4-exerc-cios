import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'


import SignInScreen from "./pages/signin";
import MainScreen from './pages/main';
import Cadastro from './pages/cadastrar';
import Adm from './pages/pgAdm'; 
import LancamentoAdm from './pages/lancamentosAdm';
import CadastroAdm from './pages/cadastroLancamentos';
import CategoriaAdm from './pages/categorias';

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
    Lancamentos: {
        screen: LancamentoAdm,
    },
    Cadastro: {
        screen: CadastroAdm,
    },

    

},{
    initialRouteName: 'Lancamentos',
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
}

)

const LancamentoNavegacao = createStackNavigator({
    de: {
        screen: CadastroAdm,
    },
    para: {
        screen: LancamentoAdm,
    }
})

const AdmNavegacao = createStackNavigator({
    de: {
        screen: Adm,
    },
    para: {
        screen: LancamentoAdm,
    },
    parapara: {
        screen: CategoriaAdm,
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
            AdmNavegacao,
            LancamentoNavegacao
            
        },
        {
            initialRouteName: 'AuthStack'
        }
    ));