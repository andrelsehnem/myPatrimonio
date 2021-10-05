import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ButtonLarge } from '../components/buttonLarge';

import { ButtonLogin } from '../components/buttonLogin';
import colors from '../styles/colors';

export function MenuInicial() {
  return (
    <View style={styles.container} >
        <Text>
            <ButtonLarge 
            title={'Teste'}/>
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colors.fundo,
    width:'100%',
    alignItems:'center',
    justifyContent:'space-around', 
  },
  text:{

  }
})


//DELETA TUDO ANTES DE FAZER PRA APRENDER MAIS, SEU VAGABUNDO
