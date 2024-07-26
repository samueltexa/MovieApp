import { StyleSheet, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/reusable/ScreenWrapper'
import ReusableImage from '../components/reusable/ReusableImage'
import { SECONDARY_COLOR, TEXT_SECONDARY_COLOR } from '../constants/colors'
import Reusable_Text from '../components/ui_components/Reusable_Text'

const SuccessfullRegistration = ({ navigation }: { navigation: any }) => {
    const local_image = '../assets/logo/logo.webp'
    return (
        <ScreenWrapper custom_styles={styles.wrapper}>
            <ReusableImage image_url={require(local_image)} />
            <Reusable_Text custom_styles={{ fontSize: 30 }} text_content='Congragulations'></Reusable_Text>
            <View style={{ alignContent: 'center' }}>
                <Reusable_Text custom_styles={{}} text_content='Your new account has been created'></Reusable_Text>
                <View style={{ flexDirection: 'row', gap: 5 }}>
                    <Reusable_Text custom_styles={{}} text_content='you can now, '></Reusable_Text>
                    <Reusable_Text onPress={() => navigation.navigate('LoginScreen')}
                        custom_styles={styles.text_wrapper} text_content='login'></Reusable_Text>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default SuccessfullRegistration

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: SECONDARY_COLOR,
        gap: 30
    },
    text_wrapper: {
        color: TEXT_SECONDARY_COLOR,
        textDecorationLine: 'underline',
    }
})