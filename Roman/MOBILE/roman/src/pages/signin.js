import React, { Component } from 'react';

import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    AsyncStorage

} from 'react-native';

export default class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: 'erikinho@gmail.com',
            senha: '1234'
        };
    }

    _realizarLogin = async () => {
        fetch('http://localhost:5000/api/login' , {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({
                email: this.state.email,
                senha: this.state.senha,
            }),
        })
        .then(resposta => resposta.json())
        .then(data => this._irParaHome(data.token))
        .catch(erro => console.warn(erro));
    }

    _irParaHome = async(tokenAReceber) =>{
        if (tokenAReceber != null) {
            try {
                await AsyncStorage.setItem('Roman-chave-autenticacao',tokenAReceber);
                this.props.navigation.navigate('MainNavigator');
            } catch (error) {
                console.warn(error)
            }
        } 
    };
    render() {
        return(
            <View>
                <TextInput placeholder="email"
                onChangeText={ email => this.setState({email})}
                value={this.state.email}
                />
                <TextInput placeholder="senha"
                onChangeText={senha => this.setState({senha})}
                value={this.state.senha}
                />
                <TouchableOpacity onPress={this._realizarLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }

}
