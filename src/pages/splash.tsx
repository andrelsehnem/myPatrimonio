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


export function Splash() {
  return (
    <View style={styles.container}>
        <Image source={animado} />
    </View>
  );
}

function SplashScreen(){
  setTimeout(() => {
    //https://www.youtube.com/watch?v=MY6rE5plNIc
  })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fFFFff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
