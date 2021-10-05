import React, { Component } from 'react';
import {
    
    StyleSheet,
    TextInput,
    TextInputAndroidProps,
    TextInputProps
} from 'react-native'

import colors from "../styles/colors";
import fonts from '../styles/fonts';

// https://reactnative.dev/docs/textinput

interface txtProps extends TextInputProps{
    title: string;
}

//deixar todos os textInputs aqui, só nomear bem pra entender depois.
export function TextInputLogin({title, ...rest}: txtProps){
    return(
        <TextInput 
        style= {styles.container}
        placeholder = {title}
        placeholderTextColor = {colors.primaria}
        {...rest}
        />
    )
};

export function TextInputSimples(){

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.fundoBtn,
        width: 300,
        height: 42,
        borderRadius:10,
        shadowColor: '#000',
        fontFamily: fonts.h3,
        fontSize:16,
        padding:10
    },
    
});