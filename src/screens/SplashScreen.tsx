import { Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { SECONDARY_COLOR, TEXT_SECONDARY_COLOR } from '../constants/colors'
import Reusable_Text from '../components/ui_components/Reusable_Text'
import ScreenWrapper from '../components/reusable/ScreenWrapper'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({ navigation }: { navigation: any }) => {
    useEffect(() => {
        const checkuserStatus = async () => {
            try {
                const user = await AsyncStorage.getItem('@user')
                if (user) {
                    navigation.replace('BottomTabsNavigator');
                } else {
                    navigation.replace('WelcomeScreen')
                }

            } catch (error) {
                console.error('Failed to load user data', error);
                navigation.replace('WelcomeScreen');
            }
        };
        setTimeout(checkuserStatus, 1000);
    }, []);

    return (
        <ScreenWrapper custom_styles={styles.splash_wrapper}>
            <Image style={styles.image_rapper} source={require('../assets/logo/logo.png')} />
            <Reusable_Text custom_styles={{ fontSize: 40, color: TEXT_SECONDARY_COLOR }} text_content='Movie Studio'></Reusable_Text>
        </ScreenWrapper>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    image_rapper: {
        width: 150,
        height: 150
    },
    splash_wrapper: {
        backgroundColor: SECONDARY_COLOR
    }
})