import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/reusable/ScreenWrapper';
import ReusableImage from '../components/reusable/ReusableImage';
import ReusableButton from '../components/ui_components/ReusableButton';
import { launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker';
import Reusable_TextInput from '../components/ui_components/Reusable_TextInput';
import { INPUT_SECONDARY_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TEXT_SECONDARY_COLOR } from '../constants/colors';

const AccountScreen = ({ navigation }: { navigation: any }) => {
  const local_image = '../assets/images/samuel.webp';

  const handleEditImage = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        console.log('Image se: ', response);
      }
    });
  };

  return (
    <ScreenWrapper custom_styles={styles.wrapper}>
      <View style={styles.imageContainer}>
        <ReusableImage
          custom_styles={styles.image_wrapper}
          image_url={require(local_image)}
        />
        <TouchableOpacity onPress={handleEditImage} style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Image</Text>
        </TouchableOpacity>
      </View>
      <Reusable_TextInput custom_styles={styles.input_wrapper} placeholdeText='Edit usename'/>
      <Reusable_TextInput custom_styles={styles.input_wrapper} placeholdeText='Edit email'/>
      <Reusable_TextInput custom_styles={styles.input_wrapper} placeholdeText='Confirm email'/>
      <ReusableButton onPress={() => navigation.replace('ProfileScreen')} button_text='Update' />
    </ScreenWrapper>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  image_wrapper: {
    borderRadius: 100,
    width: 100,
    height: 100,
  },
  wrapper: {
    gap: 30,
  },
  imageContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  editButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: TEXT_SECONDARY_COLOR,
    borderRadius: 5,
  },
  editButtonText: {
    color: PRIMARY_COLOR,
    fontSize: 14,
    textAlign: 'center',
  },
  input_wrapper:{
    backgroundColor: INPUT_SECONDARY_COLOR
  }
});
