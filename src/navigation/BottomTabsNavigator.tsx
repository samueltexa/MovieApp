import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MoviesScreen from '../screens/MoviesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TEXT_SECONDARY_COLOR } from '../constants/colors';

const MainTabs = createBottomTabNavigator();
const BottomTabsNavigator = () => {

  return (
    <MainTabs.Navigator initialRouteName='home'
    screenOptions={
      {
        headerTitleAlign:'left',
        // headerTintColor: 'red', top bar Text color
        headerStyle: { backgroundColor: TEXT_SECONDARY_COLOR }, // top background color
        tabBarActiveTintColor:TEXT_SECONDARY_COLOR, // tob bar active color
      }
    }
    >
      <MainTabs.Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='home' size={size} color={color} />
          )
        }}
        name='Home' component={HomeScreen} />
      <MainTabs.Screen
      options={{
        tabBarIcon:({color, size})=>(
          <FontAwesome5 name='photo-video' size={size} color={color}/>
        ), headerTitle: '',
      }}
       name='Movies' component={MoviesScreen} />
      <MainTabs.Screen
       options={{
        tabBarIcon:({color, size})=>(
          <FontAwesome name='heart' size={size} color={color}/>
          
        ),
      }}
       name='Favorites' component={FavoritesScreen} />
      <MainTabs.Screen
       options={{
        tabBarIcon:({color, size})=>(
          <AntDesign name='setting' size={size} color={color}/>
        )
      }}
       name='Settings' component={SettingsScreen} />
    </MainTabs.Navigator>
  )
}
export default BottomTabsNavigator

const styles = StyleSheet.create({})