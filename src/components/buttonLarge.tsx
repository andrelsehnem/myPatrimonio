import React from "react";
import { 
    TouchableOpacityProps,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';



 //https://styled-components.com/

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface ButtonProps extends TouchableOpacityProps{
    title: string;

}

export function ButtonLarge ({title, ...rest}: ButtonProps) {
    return(
        <TouchableOpacity
        style = {styles.container}
        {...rest}>
            <Text
            style = {styles.text}
            >

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

    },
    text:{

    }
})