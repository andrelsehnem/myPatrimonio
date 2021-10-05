import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    TouchableOpacityProps
} from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps{
    title: string;
}

export function ButtonLogin({title, ...rest}: ButtonProps) {
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
        backgroundColor: colors.primaria,
        width: 102,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    text:{
        fontSize:16,
        color: colors.cinzaClaro,
        fontFamily: fonts.bts,
    }
})