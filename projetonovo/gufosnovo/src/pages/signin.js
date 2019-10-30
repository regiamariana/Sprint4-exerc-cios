import React, {Component} from 'react';

import {
Text,
View,
TextInput,
TouchableOpacity,
AsyncStorage

} from 'react-native';
// import { AsyncResource } from 'async_hooks';
//import console = require('console');
//import { TouchableOpacity } from 'react-native-gesture-handler';
// import console = require('console');


export default class SignIn extends Component{


    constructor(){
        super();
        this.state = {
            email: 'admin@admin.com',
            senha: '123456'
        };
    }

    _realizarLogin = async () =>{
        //console.warn(this.state.email + this.state.senha);
        fetch('http://192.168.7.85:5000/api/login', {
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
        //sharedpreferences
        .then(data => this._irParaHome(data.token))
        .catch(erro => console.warn(erro));
    }


    _irParaHome = async(tokenAReceber) =>{
        if (tokenAReceber != null) {
            try {
                //asyncstorage == local q vai guardar o token
                await AsyncStorage.setItem('@gufos:token', tokenAReceber);
                //redirecionar para a pg q eh escolhida
                this.props.navigation.navigate('MainNavigator');
            } catch (error) {
                console.warn(error)
            }
        } 
        
    };






    render(){
        return(
            <View>
                <TextInput placeholder="email" 
                onChangeText={email => this.setState({email})}
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