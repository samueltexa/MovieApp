import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/reusable/ScreenWrapper'
import ReusableImage from '../components/reusable/ReusableImage'
import Reusable_Text from '../components/ui_components/Reusable_Text'
import ReusableButton from '../components/ui_components/ReusableButton'

const ProfileScreen = ({navigation}:{navigation:any}) => {
    const local_image = '../assets/images/samuel.webp';
  return (
    <ScreenWrapper custom_styles={styles.wrapper}>
      <View>
      <ReusableImage custom_styles={styles.image_wrapper} image_url={require(local_image)}/>
      <Reusable_Text custom_styles={{color:'black', textAlign:'center'}} text_content='User'/>
      </View>
        <Reusable_Text custom_styles={{color:'black'}} text_content='Alinda Samuel'/>
        <Reusable_Text custom_styles={{color:'black'}} text_content='woolardsamuels@gmail.com'/>
        <ReusableButton onPress={()=>navigation.replace('AccountScreen')} button_text='Edit'/>
    </ScreenWrapper>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  image_wrapper:{
    borderRadius:100
  },
  wrapper:{
    gap:30
  }
})