import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {useNavigation} from '@react-navigation/core'

import { ButtonLogin } from '../components/buttonLogin';
import colors from '../styles/colors';
import { TextInputLogin } from '../components/textInputs';
const logo = require('../assets/myPatrimonioNoBG.png');

export function Login() {
  const navigation = useNavigation();

  function trocaTela(){
    navigation.navigate('MenuInicial');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={logo} />
      </View>
      <View style={styles.entry}>
      <View style={styles.inputs}>
        <TextInputLogin 
        title="Teste"/>
      </View>
      <View style={styles.inputs}>
        <TextInputLogin
        title="Senha"
        secureTextEntry={true}
        />
      </View>
      <View style={styles.button}>
        <ButtonLogin 
          title="Login"
          onPress={trocaTela}
        />
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
        width:'100%',
        alignItems:'center',
        backgroundColor: colors.fundo,
  },
  logo:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  entry:{
    flex:1,
    alignItems: 'center',
  },
  inputs:{
    padding: 10,
  },
  button:{
    padding: 10,
  },
})