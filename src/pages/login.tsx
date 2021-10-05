import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/core'

import { ButtonLogin } from '../components/buttonLogin';
import colors from '../styles/colors';
const logo = require('../assets/myPatrimonioNoBG.png');

export function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={logo} />
      </View>
      <View style={styles.inputs}>
        <ButtonLogin 
          title="Login"
          onPress={trocaTela}
        />
      </View>
    </View>
  );

  function trocaTela(){
    navigation.navigate('MenuInicial');
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around', 
        backgroundColor: colors.fundo,
  },
  logo:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputs:{
    flex:1,
  },
})