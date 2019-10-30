import MainScreen from './pages/main';
import ProfileScreen from './pages/profile';
import SignInScreen from './pages/signin';
import Categorias from './pages/categorias';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AuthStack = createStackNavigator({
    Sign: {screen: SignInScreen},
    
    
});



const NavegacaoDeCategoria = createStackNavigator({
    Main: {
        screen: MainScreen,
    },
    Categorias: {
        screen: Categorias,
    },
})

const MainNavigator = createBottomTabNavigator({
    Main: {
        screen: MainScreen,
    },
    Profile: {
        screen:ProfileScreen,
    },
},
{
    initialRouteName: 'Profile',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      inactiveBackgroundColor: '#B727FF',
      activeBackgroundColor: '#9900e6',
      style: {
        width: '100%',
        height: 50,},
    },
},
);

export default createAppContainer(
    
    createSwitchNavigator(
        {
        MainNavigator,
        AuthStack,
        NavegacaoDeCategoria,
        


        //primeiro as rotas
        },
        {
            initialRouteName: 'AuthStack'
            //depois por onde elas vão começar
        },
));