import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPassword from '../screens/ForgotPassword';
import SuccessfullRegistration from '../screens/SuccessfullRegistration';
import BottomTabsNavigator from './BottomTabsNavigator';
import AccountScreen from '../screens/AccountScreen';
import { TEXT_SECONDARY_COLOR } from '../constants/colors';
import ProfileScreen from '../screens/ProfileScreen';


const MainStack = createStackNavigator();

const StackNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SplashScreen'>
      <MainStack.Screen name='SplashScreen' component={SplashScreen} />
      <MainStack.Screen name='HomeScreen' component={HomeScreen} />
      <MainStack.Screen name='WelcomeScreen' component={WelcomeScreen} />
      <MainStack.Screen name='LoginScreen' component={LoginScreen} />
      <MainStack.Screen name='RegisterScreen' component={RegisterScreen} />
      <MainStack.Screen name='ForgotPassword' component={ForgotPassword} />
      <MainStack.Screen name='SuccessfullRegistration' component={SuccessfullRegistration} />
      <MainStack.Screen name='BottomTabsNavigator' component={BottomTabsNavigator} />
      <MainStack.Screen options={{
        headerShown: true,
        title: 'Profile',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: TEXT_SECONDARY_COLOR,
        },
      }} name='ProfileScreen' component={ProfileScreen} />
      <MainStack.Screen
        options={{
          headerShown: true,
          title: 'Account',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: TEXT_SECONDARY_COLOR,
          },
        }}
        name='AccountScreen' component={AccountScreen} />
    </MainStack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})