import React, { Component } from "react";
import { ScrollView, TextInput, Text, FlatList, View, SafeAreaView, Image, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';


export default class Categorias extends Component {
    constructor() {
        super();
        this.state = {
            categorias: [],
        };
    }


    componentDidMount() {
        this._carregarCategorias();
    }

    _carregarCategorias = async () => {
        await fetch('http://192.168.5.123:5000/api/categoria')
            .then(resposta => resposta.json())
            .then(data => this.setState({ categorias: data }))
            .catch(erro => console.warn(erro));
    };


    render() {
        return (
            <View style={{backgroundColor: "black"}}>
                <ScrollView>
                    {/* título */}
                    <View style={{ position: "relative" }}>
                        <Image
                            style={{ width: 300, height: 160, }}
                            source={{ uri: 'https://docs.substance3d.com/sddoc/files/159450981/159450980/1/1496152369146/stripes.png' }}
                        />
                        <View style={{ backgroundColor: "white", width: 500, height: 100, position: "absolute", top: 30, left: 0 }}>

                        </View>

                        <View style={{ top: -120, alignSelf: "center" }}>
                            <Text style={{ color: 'maroon', fontSize: 55, alignContent: "center" }}>[Categorias]</Text>
                        </View>
                    </View>

                    <FlatList

                        data={this.state.categorias}
                        keyExtractor={item => item.idcategoria}
                        renderItem={({ item }) => (
                            
                                <View style={{ backgroundColor: "white", borderRadius: 20, marginVertical: 10 }}>
                                    <Text style={{ textAlign: "center", marginVertical: 10, fontSize: 30, color: "maroon", justifyContent: "center" }}>{item.categoria1}</Text>
                                </View>
                        )}

                    />


                </ScrollView>
            </View>
        )
    }

}