import React, {useState} from 'react';
import { Text, View, SafeAreaView, Button, TextInput, Image, Switch, FlatList  } from 'react-native';

import icon1 from './../../../imgs/icon1.png';
import userImg from './../../../imgs/user.png';
import Solicitacao from './../Solicitacao';

export default function Works({estilo}) {
    const [atendendo,setAtendendo] = useState(false);
    const [solicitacoesData, setSolicitacoesData] = useState([
        {
            key:0,
            nome:'Julio',
            endereco : {
                uf: 'SP',
                cidade : 'Cotia',
                bairro: 'Jardim coimbra',
                rua: 'Rua Uva'
            },
        },
        {
            key:1,
            nome:'e',
            endereco : {
                uf: 'SP',
                cidade : 'Cotia',
                bairro: 'Jardim coimbra',
                rua: 'Rua Uva'
            },
        },
        {
            key:2,
            nome:'d',
            endereco : {
                uf: 'SP',
                cidade : 'Cotia',
                bairro: 'Jardim coimbra',
                rua: 'Rua Uva'
            },
        },
        {
            key:3,
            nome:'c',
            endereco : {
                uf: 'SP',
                cidade : 'Cotia',
                bairro: 'Jardim coimbra',
                rua: 'Rua Uva'
            },
        },
        {
            key:4,
            nome:'b',
            endereco : {
                uf: 'SP',
                cidade : 'Cotia',
                bairro: 'Jardim coimbra',
                rua: 'Rua Uva'
            },
        },
        {
            key:5,
            nome:'a',
            endereco : {
                uf: 'SP',
                cidade : 'Cotia',
                bairro: 'Jardim coimbra',
                rua: 'Rua Uva'
            },
        },
        {
            key:6,
            nome:'a',
            endereco : {
                uf: 'SP',
                cidade : 'Cotia',
                bairro: 'Jardim coimbra',
                rua: 'Rua Uva'
            },
        },
        {
            key:7,
            nome:'a',
            endereco : {
                uf: 'SP',
                cidade : 'Cotia',
                bairro: 'Jardim coimbra',
                rua: 'Rua Uva'
            },
        },
        {
            key:8,
            nome:'a',
            endereco : {
                uf: 'SP',
                cidade : 'Cotia',
                bairro: 'Jardim coimbra',
                rua: 'Rua Uva'
            },
        },
        {
            key:9,
            nome:'a',
            endereco : {
                uf: 'SP',
                cidade : 'Cotia',
                bairro: 'Jardim coimbra',
                rua: 'Rua Uva'
            },
        },
        {
            key:10,
            nome:'a',
            endereco : {
                uf: 'SP',
                cidade : 'Cotia',
                bairro: 'Jardim coimbra',
                rua: 'Rua Uva'
            },
        },
    ]);

  return (
    <SafeAreaView style={{padding:10,flex:1}}>
        <View style={{width:'100%',padding:10,backgroundColor:'#F2E5E5',flexWrap:'wrap',flexDirection:'row'}}>
            <Image source={icon1} style={{width: '40%', height: '90%'}}/>
            <View style={{flex:1,marginLeft:5}}>
                <Text>Nome do servico</Text>
                <Text>Descricao do serviço oferecido</Text>
                
                <Text>UF</Text>
                <Text>Cidade</Text>
                <Text>Bairro</Text>
                <Text>Rua</Text>
            </View>

        </View>
        <View style={{flexWrap:'wrap', width:'100%',flexDirection:'row',marginBottom:30}}>
                <Text>Atendendo agora?</Text>
                <Switch
                    onValueChange = {(value)=>{
                        setAtendendo(value);
                    }}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={atendendo ? "steelblue" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    value={atendendo}
                />
            </View>
        
        <FlatList 
          data={solicitacoesData} 
          renderItem={(data) => <Solicitacao {...data} img={userImg}></Solicitacao>}
          keyExtractor={(item) => {
            return item.key.toString()}}
        />      

        <View style={{width:'100%',padding:5}}></View>
        
    </SafeAreaView>
  );
}