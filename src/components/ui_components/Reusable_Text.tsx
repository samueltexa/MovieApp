import { StyleSheet, Text, TextProps, TextStyle } from 'react-native'
import React from 'react'
import { PRIMARY_COLOR } from '../../constants/colors'

export interface RText extends TextProps {
    custom_styles?: TextStyle,
    text_content: string
}

const Reusable_Text = ({ custom_styles, text_content, ...other_props }: RText) => {
    return (
        <Text {...other_props} style={[styles.text_wrapper, custom_styles]}>{text_content}</Text>
    )
}

export default Reusable_Text

const styles = StyleSheet.create({
    text_wrapper: {
        color: PRIMARY_COLOR,
        fontSize: 20
    }
})