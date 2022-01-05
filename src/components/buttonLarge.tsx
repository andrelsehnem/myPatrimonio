import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native';

 //https://styled-components.com/

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface ButtonProps extends TouchableOpacityProps{
    title: string;
}
ButtonLarge
export function ButtonLarge({title, ...rest}: ButtonProps) {
    return(
        <TouchableOpacity
            style={styles.container}
            {...rest}>
            <Text style = {styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.fundoBtn,
        width: 138,
        height: 138,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems:'center',
        borderColor: 'black',
        borderWidth:1,
    },
    text:{
        fontSize:16,
        color: colors.cinzaEscuro,
        fontFamily: fonts.bts,
    }
})