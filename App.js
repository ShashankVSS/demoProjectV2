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
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  button: {
    width: '90%',
    height: 50,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  linktext: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 17,
    letterSpacing: 2
  }
});
