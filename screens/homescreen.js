import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground  } from 'react-native';
import { withTheme } from 'react-native-elements';

const image = require('../assets/airport.jpg');


export default function Homescreen({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('Option')
    }
    return (
        <ImageBackground source={image} style={styles.image}>
        <StatusBar style="auto" />
        <View style={{
          flex: 4.5,
          alignContent: 'center',
          justifyContent: 'center',
          }}>
            <Text style={styles.title}>From Us, to You.</Text>
            <Text style={styles.title}>Information in a Flash</Text>
        </View>
        <View style={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          }}>
            <TouchableOpacity onPress={pressHandler}>
              <View style={styles.button}>
                <Text style={styles.linktext}>OPTIONS</Text>
              </View>
            </TouchableOpacity>
        </View>
        <View style={{
          flex: 1,
          alignContent: 'center',
          }}>
            <TouchableOpacity onPress={() => console.log("About Pressed")}>
              <View style={styles.button}>
                <Text style={styles.linktext}>ABOUT</Text>
              </View>
            </TouchableOpacity>
        </View>
        </ImageBackground>
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
    title: {
      alignSelf: 'center',
      top: -80,
      fontSize: 40,
      fontFamily: 'Staatliches',

    },
    linktext: {
      fontWeight: 'bold',
      fontFamily: 'Roboto',
      fontSize: 17,
      letterSpacing: 2
    }
  });