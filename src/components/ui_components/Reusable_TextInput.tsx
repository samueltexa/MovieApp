import { StyleSheet, TextInputProps, ViewStyle } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants/colors'

export interface RTextInput extends TextInputProps {
    placeholdeText?: string,
    custom_styles?: ViewStyle,
    isPassword?: boolean,
}
const Reusable_TextInput = ({ custom_styles, isPassword, placeholdeText, ...other_props }: RTextInput) => {
    return (
        <>
            {
                isPassword ?
                    (<TextInput {...other_props} style={[styles.text_input_wrapper, custom_styles]} placeholder={placeholdeText} secureTextEntry />

                    ) : (
                        <TextInput {...other_props} style={[styles.text_input_wrapper, custom_styles]} placeholder={placeholdeText} />
                    )}
        </>
    )
}

export default Reusable_TextInput

const styles = StyleSheet.create({
    text_input_wrapper: {
        backgroundColor: PRIMARY_COLOR,
        width: '100%',
        borderRadius: 10,
        color: SECONDARY_COLOR,
        fontSize: 20,
        paddingLeft: 15
    }
});