import React from 'react';
import {
    Text,
    StyleSheet,
    TextInput,
    TextInputAndroidProps,
} from 'react-native'

import colors from "../styles/colors";

// https://reactnative.dev/docs/textinput

interface txtProps extends TextInputAndroidProps{
    title: string;
}

//deixar todos os textInputs aqui, só nomear bem pra entender depois.
export function TextInputLogin({title, ...rest}: txtProps){
    return(
        <TextInput 
        style= {styles.container}
        {...rest}
        >
            {title}
        </TextInput>
    )
};

export function TextInputSimples(){

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.fundoBtn,
        width:245,
        height: 39,
        borderRadius:10,
        shadowColor: '#000',
    },
    text:{
    }
});