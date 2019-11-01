/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//import console = require('console');

class App extends Component{
  constructor(){
    super();
    this.state = {
      medicos: []
    };
  }


  componentDidMount(){
    this._listarMedicos();
  }


  _listarMedicos = () =>{
    fetch('http://192.168.4.14:5000/api/medicos')
    .then(response => response.json())
    .then(data=> this.setState({medicos: data}))
    .catch(erro=> console.warn(erro));
  };

  render(){
    return(
      <View style={{backgroundColor: "#BB96FF", alignItems: 'center', position: 'absolute',   height: "100%", width: "100%", justifyContent: "center"}}>
        <FlatList
        
        data={this.state.medicos}
        keyExtractor={item => item.idmedico}
        renderItem={({item}) => (
          
            <View
            style={{margin: 30,
              alignSelf: "center",
            }}>
            
            <Text style={{fontSize: 55, margin: 5,  width: 250, backgroundColor:"#EC96FF",
            borderRadius: 20}}>{item.nome}</Text>
            <Text style={styles.OI}>{item.especialidade}</Text>
            <Text style={styles.OI}>{item.datanascimento}</Text>
            <Text style={styles.OI}>{item.crm}</Text>
            <Text style={styles.OI}>{item.ativo}</Text>
            </View>
          
            )}
        />
      </View>
    )
  }

} 


const styles = StyleSheet.create({
OI: {
  fontSize: 25,
  margin: 5
},

cachorro: {
  backgroundColor: "red",
},

gato: {
  backgroundColor: "green",
}

});

export default App;
