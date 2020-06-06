import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// components
import Login from './telas/Login/';
import Cadastro from './telas/Cadastro/';
import Works from './telas/Works/';
import Profile from './telas/Profile/';
import Feed from './telas/Feed/';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen 
          name="Cadastro" 
          component={Cadastro} 
        />

        <Stack.Screen 
          name="Works" 
          component={Works} 
        />

        <Stack.Screen 
          name="Profile" 
          component={Profile} 
        />

        <Stack.Screen 
          name="Feed" 
          component={Feed}           
        />

      </Stack.Navigator>
       
    </NavigationContainer>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs : {
    padding:10,
    height:10,
    width: 50,
    borderRadius:10,
  },
};
