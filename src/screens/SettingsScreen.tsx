import { ActivityIndicator, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ReusableButton from '../components/ui_components/ReusableButton'
import ScreenWrapper from '../components/reusable/ScreenWrapper'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SettingsScreen = ({navigation}:{navigation:any}) => {

    const handleLogout = async (setLoading: React.Dispatch<React.SetStateAction<boolean>>, navigation: any) => {
        setLoading(true); // Start loading
        try {
          await AsyncStorage.removeItem('@user'); // Remove username or email
          setTimeout(() => {
            setLoading(false); // Stop loading after 2 minutes
            navigation.replace('WelcomeScreen'); // Redirect to welcome screen
          }, 1000); // 2 minutes delay
        } catch (error) {
          console.error('Failed to clear user data', error);
          setLoading(false); // Stop loading on error
        }
      }
    
      const [loading, setLoading] = useState(false); // State to manage loading





    return (
        <ScreenWrapper custom_styles={{backgroundColor:'red'}}>
            {loading?( <ActivityIndicator size="small" color="#fff" />):
            (<ReusableButton onPress={() => handleLogout(setLoading, navigation)} button_text='Logout'></ReusableButton>)
            }
        </ScreenWrapper>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({})