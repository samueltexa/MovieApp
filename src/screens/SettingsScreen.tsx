import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Switch, ScrollView } from 'react-native';

const SettingsScreen = ({navigation}:{navigation:any}) => {
    // Handle logout
    const handle_logout = async () => {
      try {
          await AsyncStorage.removeItem('@user');
          navigation.replace('WelcomeScreen')
      } catch (error) {
          console.error("Failed to logout", error)
      }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handle_logout} style={styles.option}>
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Preferences</Text>
        <View style={styles.option}>
          <Text style={styles.optionText}>Dark Mode</Text>
          <Switch value={false} onValueChange={(value) => console.log('Toggle Dark Mode')} />
        </View>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Font Size</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About & Support</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>App Version</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} >
          <Text style={styles.optionText}>Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
  },
});

export default SettingsScreen;
