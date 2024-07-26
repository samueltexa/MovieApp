import { ActivityIndicator, Alert, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/reusable/ScreenWrapper'
import ReusableImage from '../components/reusable/ReusableImage'
import { ERROR_COLOR, SECONDARY_COLOR, TEXT_SECONDARY_COLOR } from '../constants/colors'
import Reusable_Text from '../components/ui_components/Reusable_Text'
import Reusable_TextInput from '../components/ui_components/Reusable_TextInput'
import ReusableButton from '../components/ui_components/ReusableButton'
import Container from '../components/reusable/Container'

const RegisterScreen = ({ navigation }: { navigation: any }) => {

    // State change management
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirm_password, setConfirmPasswrod] = useState('');
    const [isLoading, setisLoading] = useState(false);

    // Input error message
    const [email_error, setEmailerror] = useState('');
    const [password_error, setPasswordError] = useState('');
    const [confirm_passwordError, setConfirmPasswordError] = useState('');

    // Handle registration
    const handle_Register = () => {
        let isValid = true;
     

        const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email) {
            if (email_pattern.test(email)) {
                setEmailerror('');
            } else {
                setEmailerror('Invalid email')
                isValid = false
            }
        } else {
            setEmailerror('Email is required')
            isValid = false
        }
        if (password) {
            if (password.length <= 7) {
                setPasswordError('Atleast 8 chracters are required')
                isValid = false;
            } else {
                setPasswordError('');
            } if (!(password === confirm_password)) {
                setConfirmPasswordError('Passwords do not match');
                isValid = false
            } else {
                setConfirmPasswordError('');
            }
        } else {
            setPasswordError('Password is required')
        }
        if (isValid) {

            setisLoading(true);
                setisLoading(true);
                setTimeout(() => {
                    setisLoading(false)
                    navigation.navigate('SuccessfullRegistration')
                }, 2500)

            const userData = {
                email,
                password,
                confirm_password
            }
            console.log(userData)
            Alert.alert("Registration Successful")
        }
    }


     const local_image = '../assets/logo/logo.webp'

    return (
        <ScreenWrapper isScrollable custom_styles={styles.wrapper}>
            <ReusableImage image_url={require(local_image)} />
            <Reusable_Text custom_styles={{ fontSize: 30 }} text_content='Create an account'></Reusable_Text>
            <Container>
                <Reusable_TextInput value={email} onChangeText={(input)=>setEmail(input)} placeholdeText='Enter email' placeholderTextColor={SECONDARY_COLOR}></Reusable_TextInput>
                {email_error? <Reusable_Text text_content={email_error} custom_styles={styles.error_message}></Reusable_Text>:null}
            </Container>
            <Container>
                <Reusable_TextInput value={password} onChangeText={(input) => setPassword(input)} isPassword placeholdeText='Enter password' placeholderTextColor={SECONDARY_COLOR}></Reusable_TextInput>
                {password_error?<Reusable_Text text_content={password_error} custom_styles={styles.error_message}></Reusable_Text>:null}
            </Container>
            <Container>
                <Reusable_TextInput value={confirm_password} onChangeText={(input)=>setConfirmPasswrod(input)} isPassword placeholdeText='Confirm password' placeholderTextColor={SECONDARY_COLOR}></Reusable_TextInput>
                {confirm_passwordError?<Reusable_Text text_content={confirm_passwordError} custom_styles={styles.error_message}></Reusable_Text>:null}
            </Container>
            <ReusableButton onPress={handle_Register} button_text={isLoading ? <ActivityIndicator /> : 'Register'}></ReusableButton>
            <View style={{ flexDirection: 'row', gap: 5 }}>
                <Reusable_Text text_content='Already have an account?'></Reusable_Text>
                <Reusable_Text onPress={() => navigation.navigate('LoginScreen')} custom_styles={{ color: TEXT_SECONDARY_COLOR, textDecorationLine: 'underline' }} text_content='Login'></Reusable_Text>
            </View>
        </ScreenWrapper>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: SECONDARY_COLOR,
        gap: 30
    },
    error_message: {
        color: ERROR_COLOR,
        fontSize:15
    }
})