import React from 'react';
import {Image,View,Text} from 'react-native';
import logo from './../imgs/help_service_logo.jpg';

export default function LogoHeader({title}){
    return (
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text>HELP SERVICE</Text>
            <Text>{title?title:''}</Text>
        </View>
        
    );
}