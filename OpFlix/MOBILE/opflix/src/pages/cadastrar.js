import React,{ Component } from "react";
import Axios from "axios";
import {TextInput,Text, FlatList, View, SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native';


export default class Cadastro extends Component{
    constructor(){
        super();
        this.state={
            nome: "",
            email: "",
            senha: "",
            telefone: "",
        }
    }
    // mudarEstadoNome = () =>{
    //     this.setState({nome})
    // }
    // mudarEstadoEmail = () =>{
    //     this.setState({email})
    // }
    // mudarEstadoSenha = () =>{
    //     this.setState({senha})
    // }
    // mudarEstadoTelefone = () =>{
    //     this.setState({telefone})
    // }

    _efetuarCadastro = (event) =>{
        event.preventDefault();
        Axios.post("http://192.168.4.14:5000/api/usuario",{
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            telefone: this.state.telefone,
            idtipousuario: 2
           
        })
        .then(data => this._irParaHome(data))
        .catch(erro => console.warn(erro))
    }

    _irParaHome = () =>{
       
            try {
                
                this.props.navigation.navigate('Login');
            } catch (error) {
                console.warn(error)
            }
        
    };


    render(){
        return(
            <View>
                <TextInput placeholder="Digite seu nome completo" 
                onChangeText={nome => this.setState({nome})}
                value={this.state.nome}
                />
                <TextInput placeholder="email" 
                onChangeText={email => this.setState({email})}
                value={this.state.email}
                />
                <TextInput placeholder="senha" 
                onChangeText={senha => this.setState({senha})}
                value={this.state.senha}
                />
                <TextInput placeholder="Telefone" 
                onChangeText={telefone => this.setState({telefone})}
                value={this.state.telefone}
                />
                <TouchableOpacity onPress={this._efetuarCadastro}>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        )
    }
}