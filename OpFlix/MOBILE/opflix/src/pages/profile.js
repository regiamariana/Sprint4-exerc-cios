import React,{ Component } from "react";
import {Text, View, AsyncStorage} from 'react-native';

export default class Profile extends Component{
    constructor(){
        super()
        this.state = {
            tokenLocal: null,
        };
    }

    componentDidMount(){
        this._buscarDadosDoStorage();
    }

    _buscarDadosDoStorage = async () =>{
        try {
            const tokenDoStorage = await AsyncStorage.getItem('@opflix:token');
            if (tokenDoStorage != null) {
                this.setState({tokenLocal : tokenDoStorage})
            }
        } catch (error) {}
    };
    
    
    
    
    render(){
        return(
            <View>

                <Text>{this.state.tokenLocal}</Text>
            </View>
        );
    }
    
}