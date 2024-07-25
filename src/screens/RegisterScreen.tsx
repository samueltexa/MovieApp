import { StyleSheet, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/reusable/ScreenWrapper'
import ReusableImage from '../components/reusable/ReusableImage'
import { SECONDARY_COLOR, TEXT_SECONDARY_COLOR } from '../constants/colors'
import Reusable_Text from '../components/ui_components/Reusable_Text'
import Reusable_TextInput from '../components/ui_components/Reusable_TextInput'
import ReusableButton from '../components/ui_components/ReusableButton'

const RegisterScreen = ({ navigation }: { navigation: any }) => {

    const local_image = '../assets/logo/logo.png'
    return (
        <ScreenWrapper isScrollable custom_styles={{ backgroundColor: SECONDARY_COLOR, gap: 30 }}>
            <ReusableImage image_url={require(local_image)} />
            <Reusable_Text custom_styles={{ fontSize: 30 }} text_content='Create an account'></Reusable_Text>
            <Reusable_TextInput placeholdeText='Enter email' placeholderTextColor={SECONDARY_COLOR}></Reusable_TextInput>
            <Reusable_TextInput isPassword placeholdeText='Enter password' placeholderTextColor={SECONDARY_COLOR}></Reusable_TextInput>
            <Reusable_TextInput isPassword placeholdeText='Confirm password' placeholderTextColor={SECONDARY_COLOR}></Reusable_TextInput>
            <ReusableButton onPress={() => navigation.navigate('SuccessfullRegistration')} button_text='Register'></ReusableButton>
            <View style={{ flexDirection: 'row', gap: 5 }}>
                <Reusable_Text text_content='Already have an account?'></Reusable_Text>
                <Reusable_Text onPress={() => navigation.navigate('LoginScreen')} custom_styles={{ color: TEXT_SECONDARY_COLOR, textDecorationLine: 'underline' }} text_content='Login'></Reusable_Text>
            </View>
        </ScreenWrapper>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})