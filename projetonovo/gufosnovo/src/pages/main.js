import React,{ Component } from "react";
import {Text, FlatList, View, SafeAreaView} from 'react-native';

export default class Main extends Component{
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
                        
                    <Text style={{fontSize: '25'}}>{item.titulo}</Text>
                    <Text style={{fontSize: '25'}}>{item.dataEvento}</Text>
                    </View>
                    
                    )}
            />
             </View>
        );
        
    }

    
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: Constants.statusBarHeight,
//       },  
// })