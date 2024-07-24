import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MoviesScreen from '../screens/MoviesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const MainTabs = createBottomTabNavigator();
const BottomTabsNavigator = () => {
  return (
    <MainTabs.Navigator>
        <MainTabs.Screen name='Home' component={HomeScreen}/>
        <MainTabs.Screen name='Movies' component={MoviesScreen}/>
        <MainTabs.Screen name='Favorites' component={FavoritesScreen}/>
        <MainTabs.Screen name='Settings' component={SettingsScreen}/>        
    </MainTabs.Navigator>
  )
}
export default BottomTabsNavigator

const styles = StyleSheet.create({})