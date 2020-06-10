import React, {useState} from 'react';
import { View  } from 'react-native';

import estilo from './../estilos';

import Worker from './Worker';

export default function Works(props) {
  
  return (
    <View>
      <Worker estilo={estilo}/>
    </View>
  );
}