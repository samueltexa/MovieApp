import { StyleSheet, View } from 'react-native'
import React from 'react'
import Reusable_TextInput from '../components/ui_components/Reusable_TextInput'

const MoviesScreen = ({navigation}:{navigation:any}) => {

  React.useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight:()=>(
        <Reusable_TextInput custom_styles={{margin:10, padding:5}} placeholdeText='Search here'/>
      )
    });

  },[navigation]);

  return (
    <Reusable_TextInput>
      
    </Reusable_TextInput>>
  )
}

export default MoviesScreen

const styles = StyleSheet.create({})