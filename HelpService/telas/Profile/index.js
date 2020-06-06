import React, {useState} from 'react';
import { StyleSheet, Text, View , Button, ScrollView, Image} from 'react-native';

import estilo from '../estilos';
import userImg from '../../imgs/user.png';

export default function Profile(props) {
  const [editando,setEditando] = useState(false);
  const [userData,setUserData] = useState({});

  return (
    <View style={estilo.container,{backgroundColor:'#FFB9B9'}}>
        <ScrollView style={{height:'85%',padding:10,}}>
          <View style={{backgroundColor:'#F8F2F2'}}>
            <Image style={{width: 156,height: 152,}} source={userData.img? userData.img : userImg} />
            <Text>{userData.name?userData.name:'Sem nome'}</Text>
            <Text>Espaço para as avaliações</Text>
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