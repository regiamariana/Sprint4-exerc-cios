import React, { Component } from "react";
import { TextInput ,Text, FlatList, View, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';


export default class Filmes extends Component {
    constructor() {
        super();
        this.state = {
            filmes: [],
            resposta: ""
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
                    return element.idplataforma === 1;
                });
                this.setState({ filmes: resultado })
            })
            .catch(erro => console.warn(erro));
    };

  _carregarLancamentosResposta = async () =>{
    await fetch('http://192.168.5.123:5000/api/lancamentos')
    .then(a => a.json())
    .then(data => {
        let resultado = data.filter(element => {
            return element.titulo == this.state.resposta;
        });
        this.setState({ filmes: resultado })
    })
    .catch(erro => console.warn(erro));
  }


    render() {
        return (
            <View>

                <TextInput
                onChangeText={resposta => this.setState({ resposta })}
                value={this.state.resposta}
                />
                <TouchableOpacity onPress={this._carregarLancamentosResposta}>
                    <Text style={{fontSize: 25, }}>ir</Text>
                </TouchableOpacity>
                <FlatList
                    data={this.state.filmes}
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