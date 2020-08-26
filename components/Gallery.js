import React from 'react'
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native'


export default function Gallery({ navigation }) {
    return (
      <View style={styles.container}>
        <Text>Sensor Gallery</Text>
        <TouchableHighlight onPress={() => navigation.navigate('Accelerometer')} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Accelerometer</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Barometer')} underlayColor="white">
          <View style={[styles.button, styles.barometer]}>
            <Text style={styles.buttonText}>Barometer</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Gyroscope')} underlayColor="white">
          <View style={[styles.button, styles.gyroscope]}>
            <Text style={styles.buttonText}>Gyroscope</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column', //default is 'column'
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
    },
    barometer: {
      backgroundColor: 'green'
    },
    gyroscope: {
        backgroundColor: 'red'
    }
  });
