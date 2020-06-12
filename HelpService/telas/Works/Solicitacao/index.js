import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Solicitacao({item,img,index}) {
    
    return (
      <View key={item.key} style={{marginBottom:10,backgroundColor:"#FFFFFF",padding:10,flexDirection:'row'}}>
        <Image source={img} style={{width:'25%',height:50}} />
        <View style={{width:'70%',}}>
          <Text>{item.nome}</Text>
          <Text>{item.endereco.rua?item.endereco.rua:'nao'}</Text>
        </View>
      </View>
    );
  
}