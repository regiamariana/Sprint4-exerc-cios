import React,{ Component } from "react";
import {ScrollView,Text, FlatList, View, SafeAreaView, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class MainScreen extends Component{
    constructor() {
        super();
        this.state = {
            nomes: [],
        };
    }

    _irParaCadastro = () =>{
        
            this.props.navigation.navigate('Para');
        
    }

    _irParaLogin = () =>{
        
        this.props.navigation.navigate('Login');
    
}


    

    render(){
        return(
            <View style={{height: '100%'}}>
                <ScrollView>
                <TouchableOpacity onPress={this._irParaCadastro}>
            <Text>[Cadastro]</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this._irParaLogin}>
            <Text>[Login]</Text>
            </TouchableOpacity>

            
           <View style={{backgroundColor: 'maroon', height: 130}}>
           <Text style={{alignSelf: "center", fontSize: 65, top: 21}}>OPFLIX</Text>
           <Text style={{ fontSize: 65, top: 21, color: "white"}}>OPFLIX</Text>
           </View>
            
            

            
            </ScrollView>
            
            

            

            </View>
        )
    }
}