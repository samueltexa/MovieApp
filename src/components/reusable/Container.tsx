import { StyleSheet, Text, View, ViewProps, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'


export interface container extends ViewProps{
    children: ReactNode,
    custom_styles?: ViewStyle

}

const Container = ({children, custom_styles, ...other_props}:container) => {
  return (
    <View style={[styles.wrapper, custom_styles]}>
      {children}
    </View>
  )
}

export default Container

const styles = StyleSheet.create({
    wrapper:{
        width:'100%'
    }
})