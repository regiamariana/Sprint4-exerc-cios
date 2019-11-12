import React, { Component } from 'react';
import {ParseJwt} from "../services/auth";
import jwt from 'jwt-decode';


import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    Image,

      
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
        await fetch('http://192.168.5.123:5000/api/Login', {
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
            
                
            <View style={{backgroundColor: "black", height: "100%"}}>

                    {/* título */}
                    <View style={{position: "relative"}}>
                    <Image 
                    style={{width: 300, height: 160, }}
                    source={{uri: 'https://docs.substance3d.com/sddoc/files/159450981/159450980/1/1496152369146/stripes.png'}}
                    />
                        <View style={{backgroundColor: "white", width: 500, height: 100, position:"absolute", top: 30, left: 0}}>
    
                        </View>

                        <View style={{top: -128, alignSelf: "center"}}>
                        <Text  style={{ color: 'maroon',fontSize: 65, alignContent: "center"}}>[Fazer Login]</Text>
                    </View>
                    </View>

                    

                   


                    {/* caixa de login */}
                    <View>
                    <Image 
                    style={{width: 350, height: 260, position: "relative", alignSelf: "center"}}
                    source={{uri: 'https://docs.substance3d.com/sddoc/files/159450981/159450980/1/1496152369146/stripes.png'}}
                    />

                    <View style={{backgroundColor: "white", width: 340, height: 250, position:"absolute", left: 30}}>  
                    </View>
                    
                    <TextInput placeholder="email"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    style={{position: "absolute",fontSize: 30, alignSelf: "center"}}
                    />


                <TextInput placeholder="senha"
                    onChangeText={senha => this.setState({ senha })}
                    value={this.state.senha}
                    style={{position: "absolute", fontSize: 30, bottom: 120, alignSelf: "center", }}
                    />


                <TouchableOpacity onPress={this._realizarLogin}
                style={{position: "absolute", bottom: 50, alignSelf: "center", borderColor: "black"}}>
                    <Text style={{fontSize: 25, }}>Login</Text>
                </TouchableOpacity>

                    </View>



                    


                    </View>
               
            
                 
        )
    }

}