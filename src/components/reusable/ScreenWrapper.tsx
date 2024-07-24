import { Image, ScrollView, StyleSheet, Text, View, ViewProps, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { PRIMARY_COLOR } from '../../constants/colors'

export interface ScreenWrapperInterface extends ViewProps {
  children: ReactNode,
  custom_styles?: ViewStyle,
  isScrollable?: boolean

}
const ScreenWrapper = ({ custom_styles, children, isScrollable, ...other_props }: ScreenWrapperInterface) => {
  return (
    <>
      {
        isScrollable ? (
          <ScrollView {...other_props} contentContainerStyle={[styles.srollabel_wrapper, custom_styles]}>{children}</ScrollView>
        ) : (
          <View {...other_props} style={[styles.wrapper, custom_styles]}>{children}</View>
        )
      }
    </>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: PRIMARY_COLOR
  },
  srollabel_wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'PRIMARY_COLOR',
    flexGrow: 1,
  }
});