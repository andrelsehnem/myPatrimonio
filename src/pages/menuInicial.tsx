import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ButtonLarge } from '../components/buttonLarge';

import { ButtonLogin } from '../components/buttonLogin';
import colors from '../styles/colors';

export function MenuInicial() {
  return (
    <View style={styles.container} >

      <View style={styles.bts}>
        <ButtonLarge 
        title="Teste"
        />
        <ButtonLarge 
        title="Teste 2"
        />
      </View>
      
      
        
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    
    backgroundColor: colors.fundo,
    width:'100%',
    alignItems:'center',
    justifyContent:'space-around', 
  },
  bts:{
    
    
  }
})


//DELETA TUDO ANTES DE FAZER PRA APRENDER MAIS, SEU VAGABUNDO
