import React, { Component } from "react";

import { Text, FlatList, View, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';



export default class pgAdm extends Component {

    _irParaLancamentoAdm = () => {
        try {
            this.props.navigation.navigate('para');
        } catch (error) {
            console.warn(error)
        }
    };



    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._irParaLancamentoAdm}>
                    <Text>Lançamentos</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
