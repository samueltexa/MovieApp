import { Alert, StyleSheet, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/reusable/ScreenWrapper'
import ReusableImage from '../components/reusable/ReusableImage'
import { SECONDARY_COLOR, TEXT_SECONDARY_COLOR } from '../constants/colors'
import Reusable_Text from '../components/ui_components/Reusable_Text'
import Reusable_TextInput from '../components/ui_components/Reusable_TextInput'
import ReusableButton from '../components/ui_components/ReusableButton'

const ForgotPassword = ({navigation}:{navigation:any}) => {

    // handle forgot passord
    const handle_password=() =>{
        Alert.alert('Check your email inbox, a rest email has been sent.')
    }

    const local_image = '../assets/logo/logo.webp'
    return (
        <ScreenWrapper isScrollable custom_styles={{ backgroundColor: SECONDARY_COLOR, gap: 30 }}>
            <ReusableImage image_url={require(local_image)} />
            <Reusable_Text custom_styles={{ fontSize: 30 }} text_content='Reset your password'></Reusable_Text>
            <Reusable_Text custom_styles={{   }} text_content='Enter your valid email below we will send you an message on how to rest your password'></Reusable_Text>
            <Reusable_TextInput placeholdeText='Enter email' placeholderTextColor={SECONDARY_COLOR}></Reusable_TextInput>
            <ReusableButton onPress={handle_password} button_text='Submit'></ReusableButton>
            </ScreenWrapper>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({})