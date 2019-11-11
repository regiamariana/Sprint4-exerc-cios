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

    _efetuarCadastro = async() =>{
        // event.preventDefault();
        await Axios.post("http://192.168.5.123:5000/api/usuario",{
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
            
            <View style={{backgroundColor: "black", height: "100%"}}>
                {/* título */}
                <View style={{position: "relative"}}>
                    <Image 
                    style={{width: 300, height: 160, }}
                    source={{uri: 'https://docs.substance3d.com/sddoc/files/159450981/159450980/1/1496152369146/stripes.png'}}
                    />
                        <View style={{backgroundColor: "white", width: 500, height: 100, position:"absolute", top: 30, left: 0}}>
    
                        </View>

                        <View style={{top: -120, alignSelf: "center"}}>
                        <Text  style={{ color: 'maroon',fontSize: 55, alignContent: "center"}}>[Fazer Cadastro]</Text>
                    </View>
                    </View>

                    <View>
                    <Image 
                    style={{width: 350, height: 360, position: "relative", alignSelf: "center"}}
                    source={{uri: 'https://docs.substance3d.com/sddoc/files/159450981/159450980/1/1496152369146/stripes.png'}}
                    />

                    <View style={{backgroundColor: "white", width: 340, height: 350, position:"absolute", left: 30}}>  
                    </View>
                
                <TextInput placeholder="Digite seu nome" 
                onChangeText={nome => this.setState({nome})}
                value={this.state.nome}
                style={{position: "absolute",fontSize: 30, alignSelf: "center", color: "black"}}
                />
                <TextInput placeholder="Email" 
                onChangeText={email => this.setState({email})}
                value={this.state.email}
                style={{position: "absolute",fontSize: 30, alignSelf: "center", top: 70}}
                />
                <TextInput placeholder="Senha" 
                onChangeText={senha => this.setState({senha})}
                value={this.state.senha}
                style={{position: "absolute",fontSize: 30, alignSelf: "center", top: 130}}
                />
                <TextInput placeholder="Telefone" 
                onChangeText={telefone => this.setState({telefone})}
                value={this.state.telefone}
                style={{position: "absolute",fontSize: 30, bottom: 100, alignSelf: "center"}}
                />
                <TouchableOpacity onPress={this._efetuarCadastro}
                style={{position: "absolute", bottom: 50, alignSelf: "center", borderColor: "black"}}>
                    <Text style={{fontSize: 25, }}>Cadastrar</Text>
                </TouchableOpacity>
                </View>
                    

                    

                
            </View>
            
        )
    }
}