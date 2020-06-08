import React, {useState} from 'react';
import { StyleSheet, Text, View , Button, ScrollView, Image, TextInput} from 'react-native';

import estilo from '../estilos';
import userDefaultImg from '../../imgs/user.png';

export default function Profile(props) {
  const [editando,setEditando] = useState(false);
  const [userData,setUserData] = useState({
    name:'nome do usaurio',
    descripiton:'descricao do user',
    endereco:{
      rua:'Rua tal',
      bairro:'Bairro tal',
      uf:'SP',
      cidade:'Itapevi'
    },
  });
  const descriptionText = function(){
    if(editando){
      return (<TextInput style={estilo.inputs} multiline={true} value={userData.descripiton?userData.descripiton:'nos fale um pouco sobre você'}></TextInput>);      
    }else{
    return (<Text style={{marginBottom:10,fontFamily:'Roboto',fontSize:18}}>{userData.descripiton?userData.descripiton:'nos fale um pouco sobre você'}</Text>);
    }
  }
  const enderecoText = function(){
    if(editando){
      return (
        <View style={{width:'90%',flexWrap:'wrap',alignContent:'stretch'}}>
          
            <Text>Bairro</Text>
            <TextInput style={estilo.inputs} value={userData.endereco.bairro}></TextInput>
          
          
          <Text>Rua</Text>
          <TextInput style={estilo.inputs} value={userData.endereco.rua}></TextInput>
          <Text>Cidade</Text>
          <TextInput style={estilo.inputs} value={userData.endereco.cidade}></TextInput>
          <Text>UF</Text>
          <TextInput style={estilo.inputs} value={userData.endereco.uf}></TextInput>
        </View>
      );
    }else{
      return (
        <View >
          <Text>Bairro: {userData.endereco.bairro}</Text>
          <Text>Rua: {userData.endereco.rua}</Text>
          <Text>Cidade: {userData.endereco.cidade}</Text>
          <Text>UF: {userData.endereco.uf}</Text>
        </View>
      ); 
    }
  }

  return (
    <View style={estilo.container,{backgroundColor:'#FFB9B9'}}>
        
        <ScrollView style={{height:'85%',padding:10,}}>
          <View style={{backgroundColor:'#F8F2F2',alignItems:'center',marginBottom:10,padding:10,borderRadius:8}}>
            <Image style={{width: 156,height: 152,}} source={userData.img? userData.img : userDefaultImg} />
            <Text>{userData.name?userData.name:'Sem nome'}</Text>
            <Text>Espaço para as avaliações</Text>
          </View>

          <View style={{width:'100%', alignItems:'center'}}>
            {descriptionText()}
            {enderecoText()}
          </View>
        </ScrollView>
        
        <View style={{width:'100%',height:'15%',backgroundColor:'#FF7171',flexWrap:'wrap',alignContent:'stretch'}}>

          <View {...estilo.button}>
            <Text style={{fontSize:18}} onPress={()=>{ 
              props.navigation.navigate('Feed')
            }}> Feed </Text>
          </View>

          <View {...estilo.button}>
            <Text style={{fontSize:18}}  onPress={()=>{ 
              setEditando(!editando);
            }}> {editando? 'Salvar':'Editar'} </Text>
          </View>
          
        </View>
        
    </View>
  );
}