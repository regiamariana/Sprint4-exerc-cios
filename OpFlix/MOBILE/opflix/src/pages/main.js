import React,{ Component } from "react";
import {Text, FlatList, View, SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class MainScreen extends Component{
    _irParaCadastro = () =>{
        
            this.props.navigation.navigate('Para');
        
    }

    _irParaLogin = () =>{
        
        this.props.navigation.navigate('Login');
    
}


    

    render(){
        return(
            <View>
                <TouchableOpacity onPress={this._irParaCadastro}>
            <Text>[Cadastro]</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._irParaLogin}>
            <Text>[Login]</Text>
            </TouchableOpacity>

            

            
            <Text>OPFLIX</Text>


            </View>
        )
    }
}