import React from 'react';
import {View, Text} from 'react-native';

import estilo from './../../estilos';

export default function Post({item}){
    return (
        <View style={estilo.post}>
            {/* <Text>{JSON.stringify(estilo)}</Text> */}
            <Text>{item.titulo}</Text>
            <Text>{item.descricao}</Text>
            <Text>{item.endereco.uf}</Text>
            <Text>{item.endereco.cidade}</Text>
            <Text>{item.endereco.bairro}</Text>
            <Text>{item.endereco.rua}</Text>
        </View>
    );
}