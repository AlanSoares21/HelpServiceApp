import React from 'react';
import { StyleSheet, Text, View , Button, TextInput, Image} from 'react-native';

import estilo from '../estilos';
import imgLogo from '../../imgs/help_service_logo.jpg';

export default function Login(props) {

  

  return (
    <View style={estilo.container}>
      <Image source={imgLogo} style={ { 
        maxWidth: 300,
        maxHeight:150,
      }}></Image>
      
          <Text style={estilo.text}>Email:</Text>
          <TextInput style={estilo.inputs}></TextInput>

          <Text style={estilo.text}>Senha:</Text>
          <TextInput style={estilo.inputs} secureTextEntry={true}></TextInput>

          <View style={{width:'70%', marginBottom:10}}>
            <Button color={'#F14141'} title={'Logar'} style={estilo.button} onPress={()=>{ 
                props.navigation.navigate('Feed')
            }}></Button>
          </View>
            
          <View style={{width:'70%'}}>
            <Button color={'#F14141'} title={'Cadastrar'} onPress={()=>{ 
                props.navigation.navigate('Cadastro')
            }}></Button>
          </View>
      
    </View>
    
  );
}