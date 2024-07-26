import { StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from '../components/reusable/ScreenWrapper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ReusableImage from '../components/reusable/ReusableImage';
import Reusable_TextInput from '../components/ui_components/Reusable_TextInput';
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import React from 'react';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const local_image = '../assets/images/samuel.webp';

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <Reusable_TextInput custom_styles={styles.input} placeholdeText='Search here' placeholderTextColor={'green'} />
          <Menu>
            <MenuTrigger style={{flexDirection:'row'}}>
            <ReusableImage custom_styles={styles.image_wrapper} image_url={require(local_image)} />
            <AntDesign style={{marginTop:30}} name='down' size={14} color={'black'} />
            </MenuTrigger>
            <MenuOptions >
            <MenuOption onSelect={() => navigation.navigate('ProfileScreen')} style={styles.menuOption}>
                <Text style={styles.menuOptionText}>Profile</Text>
              </MenuOption>
              <MenuOption onSelect={() => navigation.navigate('AccountScreen')} style={styles.menuOption}>
                <Text style={styles.menuOptionText}>Account</Text>
              </MenuOption>
              <MenuOption onSelect={() => console.log('Notifications')} style={styles.menuOption}>
                <Text style={styles.menuOptionText}>Notifications</Text>
              </MenuOption>
              <MenuOption onSelect={() => console.log('Watch history')} style={styles.menuOption}>
                <Text style={styles.menuOptionText}>Watch history</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </View>
      ),
    });
  }, [navigation]);

  return (
  
      <ScreenWrapper>
        <View>
          <Text>HomeScreen</Text>
        </View>
      </ScreenWrapper>
   
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image_wrapper: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  headerRightContainer: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 50,
  },
  dropdownTrigger: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  menuOptions: {
    marginTop: 10,
    padding: 0,
    borderRadius: 4,
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderWidth: 1,
    width: 150,
  },
  menuOption: {
    padding: 10,
  },
  menuOptionText: {
    fontSize: 16,
  },
});
