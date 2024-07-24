import { StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from 'react-native'
import React from 'react'
import Reusable_Text from './Reusable_Text'
import { TEXT_SECONDARY_COLOR } from '../../constants/colors'


export interface RButton extends TouchableOpacityProps {
    button_text: string,
    custom_styles?: ViewStyle | TextStyle
}
const ReusableButton = ({ button_text, custom_styles, ...other_props }: RButton) => {
    return (
        <TouchableOpacity  {...other_props} style={[styles.button_wrapper, custom_styles]} >
            <Reusable_Text {...other_props} custom_styles={ custom_styles} text_content={button_text} />
        </TouchableOpacity>
    )
}

export default ReusableButton

const styles = StyleSheet.create({
    button_wrapper: {
        backgroundColor: TEXT_SECONDARY_COLOR,
        width: '100%',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})