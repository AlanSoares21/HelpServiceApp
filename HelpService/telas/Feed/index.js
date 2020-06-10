import React, {useState} from 'react';
import { StyleSheet, Text, View , Button, ScrollView, FlatList} from 'react-native';

import estilo from './../estilos';
import Post from './Post';

export default function Feed(props) {
  const [dataFeed, setDataFeed] = useState([
    {
      key:1,
      titulo:'Titulo',
      descricao:'descricao do trabalho leia tudo pq essa parte tem que ser longa',
      endereco : {
        uf: 'SP',
        cidade : 'Cotia',
        bairro: 'Jardim coimbra',
        rua: 'Rua Uva'
      },
    },
    {
      key:2,
      titulo:'Titulo',
      descricao:'descricao do trabalho leia tudo pq essa parte tem que ser longa',
      endereco : {
        uf: 'SP',
        cidade : 'Cotia',
        bairro: 'Jardim coimbra',
        rua: 'Rua Uva'
      },
    },
    {
      key:3,
      titulo:'Titulo',
      descricao:'descricao do trabalho leia tudo pq essa parte tem que ser longa',
      endereco : {
        uf: 'SP',
        cidade : 'Cotia',
        bairro: 'Jardim coimbra',
        rua: 'Rua Uva'
      },
    },
    {
      key:4,
      titulo:'Titulo',
      descricao:'descricao do trabalho leia tudo pq essa parte tem que ser longa',
      endereco : {
        uf: 'SP',
        cidade : 'Cotia',
        bairro: 'Jardim coimbra',
        rua: 'Rua Uva'
      },
    },
    {
      key:5,
      titulo:'Titulo',
      descricao:'descricao do trabalho leia tudo pq essa parte tem que ser longa',
      endereco : {
        uf: 'SP',
        cidade : 'Cotia',
        bairro: 'Jardim coimbra',
        rua: 'Rua Uva'
      },
    },
  ]);

  return (
    <View style={estilo.container}>
        <FlatList 
          data={dataFeed} 
          renderItem={(postData) => <Post {...postData} />}
          keyExtractor={(item) => {return item.key.toString()}}
        />   

        <View style={estilo.menu}>

          <View style={estilo.button}>
            <Text style={{fontSize:18}} onPress={()=>{ 
              props.navigation.navigate('Works')
            }}> Works </Text>
          </View>

          <View style={estilo.button}>
            <Text style={{fontSize:18}}  onPress={()=>{ 
              props.navigation.navigate('Profile')
            }}> Profile </Text>
          </View>

          <View style={estilo.button}>
            <Text style={{fontSize:18}}  onPress={()=>{ 
              
            }}> XXX </Text>
          </View>
          
          
        </View>
        
    </View>
  );
}