import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/reusable/ScreenWrapper'
import ReusableImage from '../components/reusable/ReusableImage'
import { SECONDARY_COLOR, TEXT_SECONDARY_COLOR } from '../constants/colors'
import ReusableButton from '../components/ui_components/ReusableButton'
import Reusable_Text from '../components/ui_components/Reusable_Text'

let local = ('../assets/logo/logo.webp')
const WelcomeScreen = ({ navigation }: { navigation: any }) => {
  const [isLoginLoading, setisLoginLoading] = useState(false);
  const [isRegisterLoading, setisRegisterLoading] = useState(false);

  const handle_login = () => {
    setisLoginLoading(true);
    setTimeout(() => {
      setisLoginLoading(false)
      navigation.navigate('LoginScreen')
    }, 20)
  }

  const handle_register = () => {
    setisRegisterLoading(true);
    setTimeout(() => {
      setisRegisterLoading(false)
      navigation.navigate('RegisterScreen')
    }, 20)
  }

  return (
    <ScreenWrapper custom_styles={{ backgroundColor: SECONDARY_COLOR, gap: 40 }}>
      <View>
        <ReusableImage custom_styles={styles.image_wrapper} image_url={require(local)} />
        <Reusable_Text custom_styles={{ color: TEXT_SECONDARY_COLOR, fontSize: 30 }} text_content='Movie Studio'></Reusable_Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Reusable_Text custom_styles={styles.text_wrapper} text_content="Welcome"></Reusable_Text>
        <Reusable_Text custom_styles={styles.text_wrapper} text_content="Get Started with your account"></Reusable_Text>
      </View>
      <View style={{ width: '100%', gap: 20, padding: 5 }}>
        <ReusableButton onPress={handle_login} button_text={isLoginLoading ? <ActivityIndicator /> : 'Login'} disabled={isLoginLoading} />
        <ReusableButton onPress={handle_register} button_text={isRegisterLoading ? <ActivityIndicator /> : 'Sign up'} disabled={isRegisterLoading} />
      </View>
    </ScreenWrapper>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  image_wrapper: {
    height: 200,
    width: 200
  },
  text_wrapper: {
    color: TEXT_SECONDARY_COLOR

  }
})