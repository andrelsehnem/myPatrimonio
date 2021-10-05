import React from 'react';
import {  SafeAreaView, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity,
  Dimensions, 
  View
 } from 'react-native';

const animado = require('../assets/animado.gif');

import { useNavigation } from '@react-navigation/core'  //yarn add @react-navigation/core

export function Splash() {
  const navigation = useNavigation();  
  
  function trocaTela(){
    navigation.navigate('Login');
  }
  
  function SplashScreen(){
    setTimeout(() => { trocaTela() }, 2500);//https://www.youtube.com/watch?v=MY6rE5plNIc
  } 

  return (
    SplashScreen(),
    <View style={styles.container}>
        <Image source={animado} />
        
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fFFFff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
