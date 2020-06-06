import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

export default function Profile(props) {
  return (
    <View style={props.estilo}>
        <Text>Ola Profile</Text>
        <Button title={'ola'} onPress={()=>{ 
            props.navigation.navigate('Login', { estilo: props.estilo })
         }}></Button>
    </View>
  );
}