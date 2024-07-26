import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/reusable/ScreenWrapper'
import ReusableImage from '../components/reusable/ReusableImage'
import { ERROR_COLOR, SECONDARY_COLOR, TEXT_SECONDARY_COLOR } from '../constants/colors'
import Reusable_Text from '../components/ui_components/Reusable_Text'
import Reusable_TextInput from '../components/ui_components/Reusable_TextInput'
import ReusableButton from '../components/ui_components/ReusableButton'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = ({ navigation }: { navigation: any }) => {

    // State management
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const [email_error, setEmailError] = useState('')
    const [password_error, setPasswordError] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    // Validations
    const handleLogin = async () => {
        setIsLoading(true)

        let isValid = true;

        // username validation
        if (username) {
            if (username.length <= 4) {
                setEmailError('Too short');
                isValid = false;
            } else if (username.length >= 31) {
                setEmailError('Maximum characters 30');
                isValid = false;
            } else {
                setEmailError('');
            }
        } else {
            setEmailError('Email or username is required');
            isValid = false;
        }

        // Password Validation
        if (password) {
            if (password.length <= 4) {
                setPasswordError('Too short');
                isValid = false;
            } else if (password.length >= 16) {
                setPasswordError('Maximum characters 15');
                isValid = false;
                setIsLoading(false)
            } else {
                setPasswordError('');
            }
        } else {
            setPasswordError('Password is required');
            isValid = false;
            setIsLoading(false)
        }

        if (isValid) {
            try {
                await AsyncStorage.setItem('@user', username);
                navigation.replace('BottomTabsNavigator')
            } catch (error) {
                console.error('Failed to save the user data', error);
            } finally {
                setIsLoading(false)
            }
            // const userDetails = {
            //     username,
            //     password
            // };
            // console.log(userDetails);
            // Alert.alert('Login Successful')
            // navigation.replace('BottomTabsNavigator')
        }
    }


    const local_image = '../assets/logo/logo.webp'
    return (
        <ScreenWrapper isScrollable custom_styles={{ backgroundColor: SECONDARY_COLOR, gap: 30 }}>
            <ReusableImage image_url={require(local_image)} />
            <Reusable_Text custom_styles={{ fontSize: 30 }} text_content='Login from here'></Reusable_Text>
            <View style={{ width: '100%' }}>
                <Reusable_TextInput value={username} onChangeText={(input) => setUsername(input)} placeholdeText='Enter username or email' placeholderTextColor={SECONDARY_COLOR}></Reusable_TextInput>
                {email_error ? <Text style={styles.error_message}>{email_error}</Text> : null}
            </View>
            <View style={{ width: '100%' }}>
                <Reusable_TextInput value={password} onChangeText={(input) => setPassword(input)} isPassword placeholdeText='Enter password' placeholderTextColor={SECONDARY_COLOR}></Reusable_TextInput>
                {password_error ? <Text style={styles.error_message}>{password_error}</Text> : null}
            </View>
            <Reusable_Text onPress={() => navigation.navigate('ForgotPassword')} custom_styles={{ color: TEXT_SECONDARY_COLOR, textDecorationLine: 'underline' }} text_content='Forgot password?'></Reusable_Text>
            <ReusableButton onPress={handleLogin} button_text={isLoading ? <ActivityIndicator/> : 'Login'} disabled={isLoading}>

            </ReusableButton>
            <View style={{ flexDirection: 'row', gap: 5 }}>
                <Reusable_Text text_content='Dont have an account?'></Reusable_Text>
                <Reusable_Text onPress={() => navigation.navigate('RegisterScreen')} custom_styles={{ color: TEXT_SECONDARY_COLOR, textDecorationLine: 'underline' }} text_content='Register'></Reusable_Text>
            </View>
        </ScreenWrapper>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    error_message: {
        color: ERROR_COLOR,
    }
})