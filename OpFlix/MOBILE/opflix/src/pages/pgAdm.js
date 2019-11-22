import React, { Component } from "react";
import { ScrollView, TextInput, Text, FlatList, View, SafeAreaView, Image, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';



export default class pgAdm extends Component {

    _irParaLancamentoAdm = () => {
        try {
            this.props.navigation.navigate('AdmNavigator');
        } catch (error) {
            console.warn(error)
        }
    };

    _irParaCategorias = () => {
        try {
            this.props.navigation.navigate('parapara')
        } catch (error) {
            console.warn(error)
        }
    };




    render() {
        return (
            <View style={{backgroundColor: "black", height: "100%"}}>
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
                            <Text style={{ color: 'maroon', fontSize: 55, alignContent: "center" }}>[Administração]</Text>
                        </View>
                    </View>

                    {/* fim título */}

                    <View>
                    <View
                    style={{alignSelf: "center", marginVertical: 60, backgroundColor: "white", borderRadius: 20, width: 250}}
                    >
                    <TouchableOpacity onPress={this._irParaLancamentoAdm}>
                        <Text style={{ textAlign: "center", fontSize: 30, color: "maroon", justifyContent: "center" }}>Lançamentos</Text>
                    </TouchableOpacity>
                    </View>


                    <View
                    style={{alignSelf: "center",backgroundColor: "white", borderRadius: 20, width: 200}}>
                    <TouchableOpacity onPress={this._irParaCategorias}>
                        <Text style={{ textAlign: "center", fontSize: 30, color: "maroon", justifyContent: "center" }}>Categorias</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
