import React,{ Component } from "react";
import Axios from "axios";
import {ScrollView,TextInput,Text, FlatList, View, SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native';


export default class CadastroLancamentos extends Component{
    constructor(){
        super();
        this.state={
            titulo: "",
            sinopse: "",
            idcategoria: "",
            idtipo: "",
            tempoduracao: "",
            datalancamento: "",
            idplataforma: "",
            idclassificacao: "",
        }
    }

    _efetuarCadastro = async() =>{
        await Axios.post("http://192.168.5.123:5000/api/lancamentos",{
            titulo: this.state.titulo,
            sinopse: this.state.sinopse,
            idcategoria: this.state.idcategoria,
            idtipo: this.state.idtipo,
            tempoduracao: this.state.tempoduracao,
            datalancamento: this.state.datalancamento,
            idplataforma: this.state.idplataforma,
            idclassificacao: this.state.idclassificacao,
        })
        .then(data => this._irParaListar(data))
        .catch(erro => console.warn(erro))
    }

    _irParaListar = () =>{
        try {
            this.props.navigation.navigate('para');
        } catch (error) {
            console.warn(error)
        }
    };

    render(){
        return(
            
            <View style={{backgroundColor: "black", height: "100%"}}>
                <ScrollView>
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
                    style={{width: 350, height: 560, position: "relative", alignSelf: "center"}}
                    source={{uri: 'https://docs.substance3d.com/sddoc/files/159450981/159450980/1/1496152369146/stripes.png'}}
                    />

                    <View style={{backgroundColor: "white", width: 340, height: 550, position:"absolute", left: 30}}>  
                    </View>
                
                <TextInput placeholder="Digite seu Título" 
                onChangeText={titulo => this.setState({titulo})}
                value={this.state.titulo}
                style={{position: "absolute",fontSize: 30, alignSelf: "center", color: "black", width: 300}}
                underlineColorAndroid = "black"
                />
                <TextInput placeholder="sinopse" 
                onChangeText={sinopse => this.setState({sinopse})}
                value={this.state.sinopse}
                style={{position: "absolute",fontSize: 30, alignSelf: "center", top: 55, width: 300}}
                underlineColorAndroid = "black"
                />
                <TextInput placeholder="idcategoria" 
                onChangeText={idcategoria => this.setState({idcategoria})}
                value={this.state.idcategoria}
                style={{position: "absolute",fontSize: 30, alignSelf: "center", top: 110, width: 300}}
                underlineColorAndroid = "black"
                />
                <TextInput placeholder="idtipo" 
                onChangeText={idtipo => this.setState({idtipo})}
                value={this.state.idtipo}
                style={{position: "absolute",fontSize: 30, top: 170, alignSelf: "center", width: 300}}
                underlineColorAndroid = "black"
                />
                <TextInput placeholder="tempoduracao" 
                onChangeText={tempoduracao => this.setState({tempoduracao})}
                value={this.state.tempoduracao}
                style={{position: "absolute",fontSize: 30, top: 230, alignSelf: "center", width: 300}}
                underlineColorAndroid = "black"
                />
                <TextInput placeholder="datalancamento" 
                onChangeText={datalancamento => this.setState({datalancamento})}
                value={this.state.datalancamento}
                style={{position: "absolute",fontSize: 30, top: 290, alignSelf: "center", width: 300}}
                underlineColorAndroid = "black"
                />
                <TextInput placeholder="idplataforma" 
                onChangeText={idplataforma => this.setState({idplataforma})}
                value={this.state.idplataforma}
                style={{position: "absolute",fontSize: 30, top: 350, alignSelf: "center", width: 300}}
                underlineColorAndroid = "black"
                />
                <TextInput placeholder="idclassificacao" 
                onChangeText={idclassificacao => this.setState({idclassificacao})}
                value={this.state.idclassificacao}
                style={{position: "absolute",fontSize: 30, top: 410, alignSelf: "center", width: 300}}
                underlineColorAndroid = "black"
                />
                <TouchableOpacity onPress={this._efetuarCadastro}
                style={{position: "absolute", bottom: 40, alignSelf: "center", borderColor: "black"}}>
                    <Text 
                    underlineColorAndroid = "black"
                    style={{fontSize: 25, }}>Cadastrar</Text>
                </TouchableOpacity>
                </View>
                    

                    

                </ScrollView>
            </View>
            
        )
    }
}