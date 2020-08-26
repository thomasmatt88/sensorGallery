import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { Accelerometer } from 'expo-sensors';

function round(n) {
    if (!n) {
      return 0;
    }
  
    return Math.floor(n * 100) / 100;
}

export default function AccelerometerScreen({ navigation }) {
    const [data, setData] = useState({});

    useEffect(() => {
      _toggle();
    }, []);
  
    useEffect(() => {
      return () => {
        _unsubscribe();
      };
    }, []);
  
    const _toggle = () => {
      if (this._subscription) {
        _unsubscribe();
      } else {
        _subscribe();
      }
    };
  
    const _slow = () => {
      Accelerometer.setUpdateInterval(1000);
    };
  
    const _fast = () => {
      Accelerometer.setUpdateInterval(16);
    };
  
    const _subscribe = () => {
      this._subscription = Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      });
    };
  
    const _unsubscribe = () => {
      this._subscription && this._subscription.remove();
      this._subscription = null;
    };

    let { x, y, z } = data;

    return (
      <View style={styles.sensor}>
        <Text style={styles.text}>Accelerometer Screen</Text>
        <Button
          title="Go to Accelerometer... again"
          onPress={() => navigation.navigate('Accelerometer')}
        />
              <Text>Accelerometer: (in Gs where 1 G = 9.81 m s^-2)</Text>
        <Text style={styles.text}>
            x: {round(x)} y: {round(y)} z: {round(z)}
        </Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={_toggle}>
            <Text>Toggle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.middleButton]} onPress={_slow}>
            <Text>Slow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={_fast} >
            <Text>Fast</Text>
            </TouchableOpacity>
        </View>
      </View>
      
    );
  }

  const styles = StyleSheet.create({
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'stretch',
      marginTop: 15,
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eee',
      padding: 10,
    },
    middleButton: {
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: '#ccc',
    },
    sensor: {
      marginTop: 45,
      paddingHorizontal: 10,
    },
    text: {
      textAlign: 'center',
    },
  });