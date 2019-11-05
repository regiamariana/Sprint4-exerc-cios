import React,{ Component } from "react";
import Axios from "axios";
import {Text, FlatList, View, SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class Temas extends Component{
    constructor(){
        super();
        this.state={
            temas: [],
        }
    }


        componentDidMount(){
            this._carregarTemas();
        };

        _carregarTemas = () =>{
            Axios.get('http://192.168.4.14:5000/api/temas' )
            .then(response => {
                // console.log(resposne.data);
                this.setState({ temas: response.data })

            })
            .catch(erro => console.log(erro))
        }


        render(){
            return(
                
                <View>
                    
                    <FlatList
                     data={this.state.temas}
                     keyExtractor={item => item.idTema}
                     renderItem={({item}) => (
                         <View>
                             <Text>{item.nomeTema}</Text>
                         </View>
                     )}
                    />
                       
                </View>
            )
        }
}