import React, { Component } from 'react';
import {ParseJwt} from "../services/auth";
import jwt from 'jwt-decode';

import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    AsyncStorage

} from 'react-native';
//import console = require('console');

export default class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: 'helena@email.com',
            senha: '123456'
        };
    }

    _realizarLogin = async () => {
        await fetch('http://192.168.4.14:5000/api/Login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
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

    _irParaHome = async (tokenAReceber) => {
        if (tokenAReceber != null) {

            try {
                // console.warn()
                await AsyncStorage.setItem('@opflix:token', tokenAReceber);
                if (jwt(tokenAReceber).permissao === 'ADM') {
                    this.props.navigation.navigate('AdmNavigator');
                } else {
                    this.props.navigation.navigate('MainNavigator');
                }
                
            } catch (error) {
                console.warn(error)
            }
        }
    };


    render() {
        return (
            <View>
                <TextInput placeholder="email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput placeholder="senha"
                    onChangeText={senha => this.setState({ senha })}
                    value={this.state.senha}
                />
                <TouchableOpacity onPress={this._realizarLogin}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }

}