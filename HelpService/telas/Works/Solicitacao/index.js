import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Solicitacao({img, nome, endereco}) {
  if(img && nome && endereco){
    return (
      <View style={{backgroundColor:"#FFFFFF",padding:10,flexDirection:'row'}}>
        <Text>OLa Solicitacao</Text>
        <Image source={{img}} />
        <View style={{width:'70%',}}>
          <Text>{nome}</Text>
          <Text>{endereco}</Text>
        </View>
      </View>
    );
  }else{
    return (
      <View>
        <Text>Falta imformacao</Text>
      </View>
    );
  }
  
}