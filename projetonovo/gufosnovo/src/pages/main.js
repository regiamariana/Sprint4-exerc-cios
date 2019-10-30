import React,{ Component } from "react";
import {Text, FlatList, View, SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class Main extends Component{
    static navigationOptions = {
        tabBarIcon: () => (
          <Image
            source={require('../assets/img/calendar.png')}
            style={styles.tabBarNavigatorIcon}
          />
        ),
      };

    constructor(){
        super();
        this.state = {
            eventos: []
        };
    }
    


    componentDidMount(){
        this._carregarEventos();
    }


    _carregarEventos = () =>{
        fetch('http://192.168.7.85:5000/api/eventos')
        .then(resposta => resposta.json())
        .then(data=> this.setState({eventos: data}))
        .catch(erro => console.warn(erro));
    };

    _irParaCategorias = () => {
       
            this.props.navigation.navigate('Categorias');
         
      };

     
    render(){
        return(
            <View style={{backgroundColor: 'purple',
            alignItems: "center",
            
            
            }}>
            <FlatList 
            
                data={this.state.eventos}
                keyExtractor={item => item.idEvento}
                renderItem={({item}) => (
                    <View>
                        
                    <Text >{item.titulo}</Text>
                    <Text >{item.dataEvento}</Text>
                    </View>
                    
                    )}
            />

            <View>
            <TouchableOpacity onPress={this._irParaCategorias}>
            <Text>Categorias</Text>
            </TouchableOpacity>
            </View>

            </View>
            
        );
       
    }

    
}
const styles = StyleSheet.create({
    tabBarNavigatorIcon: {width: 25, height: 25, tintColor: 'white'}
    });

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: Constants.statusBarHeight,
//       },  
// })