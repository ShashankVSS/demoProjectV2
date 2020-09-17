import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground  } from 'react-native';
import { withTheme } from 'react-native-elements';
import Navigator from './routes/homeStack';

export default function App() {
  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  }
});
