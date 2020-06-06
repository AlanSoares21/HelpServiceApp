import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

export default function Works(props) {
  return (
    <View style={props.estilo}>
        <Text>Ola Works</Text>
        <Button title={'ir para Login'} onPress={()=>{ 
            props.navigation.navigate('Login', { estilo: props.estilo })
         }}></Button>
    </View>
  );
}