import React, { Component } from "react";
import { ScrollView,TextInput, Text, FlatList, View, SafeAreaView, Image, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';


export default class Filmes extends Component {
    constructor() {
        super();
        this.state = {
            filmes: [],
            resposta: "",
            lancamentoBuscado: [],
        };
    }

    componentDidMount() {
        this._carregarLancamentos();
    }

    _carregarLancamentos = async () => {
        let token = await AsyncStorage.getItem('@opflix:token');
        await fetch('http://192.168.5.123:5000/api/lancamentos', {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
            .then(resposta => resposta.json())
            .then(data => {
                let resultado = data.filter(element => {
                    return element.idtipo == 1;
                });
                this.setState({ filmes: resultado })
            })
            .catch(erro => console.warn(erro));
    };

    _carregarLancamentosResposta = async () => {
        let token = await AsyncStorage.getItem('@opflix:token');
        // console.warn(token)
        await fetch('http://192.168.5.123:5000/api/lancamentos', {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        })
            .then(a => a.json())
            .then(data => {
                let resultado = data.filter(element => {
                    return element.titulo == this.state.resposta;
                });
                this.setState({ lancamentoBuscado: resultado })
            })
            .catch(erro => console.warn(erro));
    }


    render() {
        return (
            <View style={{backgroundColor: "#000"}}>
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
                        <Text  style={{ color: 'maroon',fontSize: 55, alignContent: "center"}}>[Filmes]</Text>
                    </View>
                    </View>
                <View >
                <TextInput
                    onChangeText={resposta => this.setState({ resposta })}
                    value={this.state.resposta}
                    style={styles.input}
                    placeholder= "Digite o nome do Filme"
                    placeholderTextColor = "#000"
                    underlineColorAndroid = "#000"
                    

                />
                <TouchableOpacity onPress={this._carregarLancamentosResposta}
                style={styles.submit}
                underlineColorAndroid = "#000"
                >
                    <Text style={{ fontSize: 20, alignSelf: "center", color: "#000", }}>ir</Text>
                </TouchableOpacity>
                </View>
                
                {(!this.state.resposta || this.state.resposta === null || this.state.resposta == '')?
        (<FlatList
            data={this.state.filmes}
            keyExtractor={item => item.idlancamentos}
            renderItem={({ item }) => (
                <View style={{ margin: 50 }}>
                    {/* <Text style={{ fontSize: 30, alignSelf: "center", color: "white"}}>Título</Text> */}
                    <View style={{backgroundColor: "white", borderRadius: 20}}>
                    <Text style={{textAlign: "center",marginBottom: 10, fontSize: 30 , color: "maroon", justifyContent: "center"}}>{item.titulo}</Text>
                    </View>
                    {/* <Text style={{ fontSize: 30 ,textAlign: "center" , color: "white" }}>sinopse</Text> */}
                    <Text style={{textAlign: "center",marginBottom: 10 , fontSize: 18 , color: "white"}}>{item.sinopse}</Text>
                    <Text style={{ fontSize: 30, textAlign: "center"  , color: "white"}}>Id categoria</Text>
                    <Text style={{textAlign: "center", marginBottom: 10, fontSize: 20 , color: "white" }}>{item.idcategoria}</Text>
                    <Text style={{ fontSize: 30, textAlign: "center",  color: "white"  }}>Id tipo</Text>
                    <Text style={{textAlign: "center",marginBottom: 10, fontSize: 20 , color: "white"}}>{item.idtipo}</Text>
                    <Text style={{ fontSize: 30, textAlign: "center"  , color: "white"}}>Tempo de duração</Text>
                    <Text style={{textAlign: "center", marginBottom: 10, fontSize: 20  , color: "white"}}>{item.tempoduracao}</Text>
                    <Text style={{ fontSize: 30, textAlign: "center", color: "white"  }}>Data de lançamento</Text>
                    <Text style={{textAlign: "center", marginBottom: 10, fontSize: 20 , color: "white" }}>{item.datalancamento}</Text>
                    <Text style={{ fontSize: 30, textAlign: "center" , color: "white" }}>Id plataforma</Text>
                    <Text style={{textAlign: "center", marginBottom: 10, fontSize: 20, color: "white"  }}> {item.idplataforma}</Text>
                    <Text style={{ fontSize: 30, textAlign: "center"  , color: "white"}}>Id classificacao</Text>
                    <Text style={{textAlign: "center", marginBottom: 10 , fontSize: 20, color: "white" }}>{item.idclassificacao}</Text>
                </View>

            )}
        />):(<FlatList
            data={this.state.lancamentoBuscado}
            keyExtractor={item => item.idlancamentos}
            renderItem={({ item }) => (
                <View style={{ margin: 50 }}>
                    {/* <Text style={{ fontSize: 30, alignSelf: "center", color: "white"}}>Título</Text> */}
                    <View style={{backgroundColor: "white", borderRadius: 20}}>
                    <Text style={{textAlign: "center",marginBottom: 10, fontSize: 30 , color: "maroon", justifyContent: "center"}}>{item.titulo}</Text>
                    </View>
                    {/* <Text style={{ fontSize: 30 ,textAlign: "center" , color: "white" }}>sinopse</Text> */}
                    <Text style={{textAlign: "center",marginBottom: 10 , fontSize: 18 , color: "white"}}>{item.sinopse}</Text>
                    <Text style={{ fontSize: 30, textAlign: "center"  , color: "white"}}>Id categoria</Text>
                    <Text style={{textAlign: "center", marginBottom: 10, fontSize: 20 , color: "white" }}>{item.idcategoria}</Text>
                    <Text style={{ fontSize: 30, textAlign: "center",  color: "white"  }}>Id tipo</Text>
                    <Text style={{textAlign: "center",marginBottom: 10, fontSize: 20 , color: "white"}}>{item.idtipo}</Text>
                    <Text style={{ fontSize: 30, textAlign: "center"  , color: "white"}}>Tempo de duração</Text>
                    <Text style={{textAlign: "center", marginBottom: 10, fontSize: 20  , color: "white"}}>{item.tempoduracao}</Text>
                    <Text style={{ fontSize: 30, textAlign: "center", color: "white"  }}>Data de lançamento</Text>
                    <Text style={{textAlign: "center", marginBottom: 10, fontSize: 20 , color: "white" }}>{item.datalancamento}</Text>
                    <Text style={{ fontSize: 30, textAlign: "center" , color: "white" }}>Id plataforma</Text>
                    <Text style={{textAlign: "center", marginBottom: 10, fontSize: 20, color: "white"  }}> {item.idplataforma}</Text>
                    <Text style={{ fontSize: 30, textAlign: "center"  , color: "white"}}>Id classificacao</Text>
                    <Text style={{textAlign: "center", marginBottom: 10 , fontSize: 20, color: "white" }}>{item.idclassificacao}</Text>
                </View>

            )}
        />)
    }
            </ScrollView>    
            </View>
        )
    }
    
}
const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       top: -30,
       left: 55,
       height: 40,
       width: 300,
       borderColor: '#fff',
       borderWidth: 1,
       borderRadius: 5,
       backgroundColor: "#fff"
    },

    submit: {
        top: -20,
        alignSelf: "center",
        borderColor: '#fff',
       borderWidth: 1,
       borderRadius: 5,
       width: 50,
       height: 30,
       backgroundColor: "#fff"
       
    }
})