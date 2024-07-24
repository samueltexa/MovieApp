import { Image, ImageProps, ImageStyle, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export interface RImage extends ImageProps {
    image_url: any,
    custom_styles?: ImageStyle,
    isOnline?: boolean,

}
const ReusableImage = ({ image_url, custom_styles, isOnline, ...other_props }: RImage) => {
    return (
        <>
            {isOnline ? (
                <Image {...other_props} style={[styles.image_wrapper, custom_styles]} source={{ uri: image_url }} />

            ) : (
                <Image {...other_props} style={[styles.image_wrapper, custom_styles]} source={image_url} />
            )}

        </>
    )
}

export default ReusableImage

const styles = StyleSheet.create({
    image_wrapper: {
        width: 100,
        height: 100
        

    }
})