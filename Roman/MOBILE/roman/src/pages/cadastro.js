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
        }
    }

    mudarEstadoNome = (event) =>{
        this.setState({nome: event.target.value})
    }
    mudarEstadoEmail = (event) =>{
        this.setState({email: event.target.value})
    }
    mudarEstadoSenha = (event) =>{
        this.setState({senha: event.target.value})
    }

    _efetuarCadastro = (event) =>{
        event.preventDefault();
        Axios.post("http://192.168.4.14:5000/api/professores",{
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha

        })
        .then(data => this._irParaMainTa(data))
        .catch(erro => console.warn(erro))
        
    }

    _irParaMainTa = async()=>{
        try{
            this.props.navigation.navigation('Main')
        }
        catch{
            console.warn(error)
        }
    }

    render(){
        return(
            <View>
                <TextInput placeholder="Nome"
                onChangeText={ nome => this.setState({nome})}
                value={this.state.nome}
                />
                <TextInput placeholder="Email"
                onChangeText={email => this.setState({email})}
                value={this.state.email}
                />
                <TextInput placeholder="senha"
                onChangeText={senha => this.setState({senha})}
                value={this.state.senha}
                />
                <TouchableOpacity onPress={this._efetuarCadastro}>
                    <Text>cadastrar</Text>
                </TouchableOpacity>
            </View>
        )
    }


    
}

// .then(data => this._irParaHome(data.token))
//         .catch(erro => console.warn(erro));
//     }

//     _irParaHome = async(tokenAReceber) =>{
//         if (tokenAReceber != null) {
//             try {
//                 await AsyncStorage.setItem('@roman:token',tokenAReceber);
//                 this.props.navigation.navigate('MainNavigator');
//             } catch (error) {
//                 console.warn(error)
//             }
//         } 
//     };