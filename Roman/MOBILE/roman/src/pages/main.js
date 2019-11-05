import React,{ Component } from "react";
import {Text, FlatList, View, SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class Main extends Component{
    constructor(){
        super();
        this.state = {
            projetos: []
        };
    }

    componentDidMount(){
        this._listarProjetos();
    }

    _listarProjetos = () => {
        fetch('http://192.168.4.14:5000/api/projetos')
        .then(resposta => resposta.json())
        .then(data => this.setState({projetos: data}))
        .catch(erro => console.warn(erro));
    };
    render(){
        return(
            <View>
                <FlatList
                    data={this.state.projetos}
                    keyExtractor={item => item.idProjeto}
                    renderItem={({item}) => (
                        <View>
                            <Text >{item.idProfessorNavigation.nomeProfessor}</Text>
                            <Text >{item.nomeProjeto}</Text>
                            <Text >{item.idTemaNavigation.nomeTema}</Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}