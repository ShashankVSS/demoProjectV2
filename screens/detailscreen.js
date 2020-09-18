import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image  } from 'react-native';

const image = require('../assets/tie.png')

export default function Detailscreen({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('Pop')
    }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}/>
        <View style={styles.container}>
          <TouchableOpacity onPress={pressHandler}>
          <Image source={image} style={styles.lul}/>
          </TouchableOpacity>
        </View>
        <View style={styles.container}/>
      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lul: {
      resizeMode: 'center',
    },
  });
