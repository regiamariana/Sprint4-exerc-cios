import React, { Component } from "react";
import { Text, FlatList, View, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';


export default class Filmes extends Component {
    constructor() {
        super();
        this.state = {
            cinema: []
        };
    }

    componentDidMount() {
        this._carregarLancamentos();
    }

    _carregarLancamentos = async () => {
        await fetch('http://192.168.5.123:5000/api/lancamentos')
            .then(resposta => resposta.json())
            .then(data => {
                let resultado = data.filter(element => {
                    return element.idplataforma == 3;
                });
                this.setState({ cinema: resultado })
            })
            .catch(erro => console.warn(erro));
    };


    render() {
        return (
            <View>
                <FlatList
                    data={this.state.cinema}
                    keyExtractor={item => item.idlancamentos}
                    renderItem={({ item }) => (
                        <View style={{marginVertical: 60}}>
                            <Text style={{fontSize: 25}}>Título</Text>
                            <Text >{item.titulo}</Text>
                            <Text style={{fontSize: 25}}>sinopse</Text>
                            <Text >{item.sinopse}</Text>
                            <Text style={{fontSize: 25}}>idcategoria</Text>
                            <Text>{item.idcategoria}</Text>
                            <Text style={{fontSize: 25}}>idtipo</Text>
                            <Text >{item.idtipo}</Text>
                            <Text style={{fontSize: 25}}>tempoduracao</Text>
                            <Text>{item.tempoduracao}</Text>
                            <Text style={{fontSize: 25}}>datalancamento</Text>
                            <Text>{item.datalancamento}</Text>
                            <Text style={{fontSize: 25}}>idplataforma</Text>
                            <Text>{item.idplataforma}</Text>
                            <Text style={{fontSize: 25}}>idclassificacao</Text>
                            <Text>{item.idclassificacao}</Text>
                        </View>

                    )}
                />
            </View>
        )
    }
}