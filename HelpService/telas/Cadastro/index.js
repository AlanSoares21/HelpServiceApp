import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { StyleSheet, Text, View , Button, TextInput, Image, Switch} from 'react-native';

import estilo from '../estilos';
import imgLogo from '../../imgs/help_service_logo.jpg';


export default function Cadastro(props) {
    const [prestador, setPrestador] = useState(false);

    return (
        <View style={estilo.container}>
            <Image source={imgLogo} style={ { 
                maxWidth: 300,
                maxHeight:150,
            }}></Image>
            
            <Text style={estilo.text}>Email:</Text>
            <TextInput style={estilo.inputs}></TextInput>
            
            <Text style={estilo.text}>Nome:</Text>
            <TextInput style={estilo.inputs}></TextInput>


            <Text style={estilo.text}>Senha:</Text>
            <TextInput style={estilo.inputs} secureTextEntry={true}></TextInput>
                        
            <Text style={estilo.text}>Você é um prestador de serviços?: { prestador? "Sim" : "Não"}</Text>
            <Switch
                onValueChange = {(value)=>{
                    setPrestador(!value)
                }}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={prestador ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                value={prestador}
            ></Switch>

                
            <View style={{width:'70%'}}>
                <Button color={'#F14141'} title={'Cadastrar'} onPress={()=>{ 
                    props.navigation.navigate('Feed', { estilo: estilo })
                }}></Button>
            </View>
            
        </View>
      );
}