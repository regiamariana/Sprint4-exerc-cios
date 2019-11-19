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
            <View style={{height: '100%', backgroundColor: "black"}}>
            <ScrollView>

           
            <TouchableOpacity 
            
            onPress={this._irParaCadastro}>
            <Text 
              style={{fontSize: 25,  color: "white", marginLeft: 50, top: 10}}
            >[Cadastro]</Text>
            </TouchableOpacity>
            <TouchableOpacity
            
             onPress={this._irParaLogin}>
            <Text  style={{fontSize: 25, color: "white", marginLeft: 280, top: -22}}>[Login]</Text>
            </TouchableOpacity>

            
            
           <View style={{backgroundColor: 'maroon', height: 100, top: -10}}>
           <Text style={{alignSelf: "center", fontSize: 65, top: 3}}>OPFLIX</Text>
           
           </View>
           <Text style={{ fontSize: 65, top: -107, left: 101, color: "white" }}>OPFLIX</Text>


           <View style={{alignContent: "center", width: 300, alignSelf: "center"}}>
               <Text style={{color: "white",alignSelf: "center", top: -80, fontSize: 25}}>OS MELHORES FILMES </Text>
               <Text style={{color: "white",alignSelf: "center", top: -80, fontSize: 25}}>E SÉRIES DE 2019 </Text>
               <Text style={{color: "white",alignSelf: "center", top: -60, fontSize: 25}}>
               lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
               </Text>
           </View>

           <View style={{width: "100%", alignItems: "center", bottom: 30}}>
               <Text style={{color: "white", fontSize: 25}}>Começar</Text>
               <Image
               style={{width: 50, height: 50,}}
               source={{uri:'http://vfconsultoria.com/wp-content/uploads/2018/07/ICON-SETA-BRANCA-baixo.png'}}
               />
           </View>
            {/* <Image 
            source={require('../assets/faxa.png')}
            /> */}

            
            </ScrollView>
            
            

            

            </View>
        )
    }
}