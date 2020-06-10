import React, {useState} from 'react';
import { Text, View, ScrollView, Button, TextInput, Image, Switch  } from 'react-native';

import icon1 from './../../../imgs/icon1.png';
import userImg from './../../../imgs/user.png';
import Solicitacao from './../Solicitacao';

export default function Works({estilo}) {
    const [atendendo,setAtendendo] = useState(false);
    const [solicitacoesData, setSolicitacoesData] = useState([
        {'nome':'Julio','endereco':{'rua':'rua uva','bairro':'jardim japao','cidade':'Cotia',uf:'SP'}},
        {'nome':'Maria','endereco':{'rua':'rua pera','bairro':'recanto','cidade':'Cotia',uf:'SP'}},
        {'nome':'Alberto','endereco':{'rua':'rua maca','bairro':'jardim japao','Jardim coimbra':'Cotia',uf:'SP'}},
        {'nome':'Roberta','endereco':{'rua':'rua melancia','bairro':'jardim japao','cidade':'Cotia',uf:'SP'}},
    ]);
  return (
    <ScrollView style={estilo.container}>
        <View style={{width:'100%',padding:10,backgroundColor:'#F2E5E5',flexWrap:'wrap',justifyContent:'center'}}>
            <Image source={icon1} style={{width: 152, height: 156}}/>
            <View>
                <Text>Nome</Text>
                <Text>Descricao do serviço oferecido</Text>
                <Text>Endereco</Text>
                <Text>UF</Text>
                <Text>Cidade</Text>
                <Text>Bairro</Text>
                <Text>Rua</Text>
            </View>
        </View>
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
        <View>
            {/* solicitacoes de servico vem aqui */}
            {
                solicitacoesData.forEach((data)=>{
                    <Solicitacao nome={data.nome} img={userImg} endereco={data.endereco} />
                })
            }
        </View>
    </ScrollView>
  );
}