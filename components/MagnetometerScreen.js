import { Magnetometer } from 'expo-sensors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function MagnetometerScreen({navigation}) {
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    z: 0,
  });
  

  React.useEffect(() => {
    _toggle();
    return () => {
      _unsubscribe();
    };
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('Back to Home Screen.')

      };
    }, [])
  );

  const _toggle = () => {
    if (this._subscription) {
      _unsubscribe();
    } else {
      _subscribe();
    }
  };

  const _slow = () => {
    Magnetometer.setUpdateInterval(1000);
  };

  const _fast = () => {
    Magnetometer.setUpdateInterval(16);
  };

  const _subscribe = () => {
    this._subscription = Magnetometer.addListener(magnetometerData => {
      setData(magnetometerData);
    });
  };

  const _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  const { x, y, z } = data;
  return (
    <View style={styles.sensor}>
      <Text>Magnetometer:</Text>
      <Text>
        x: {round(x)} y: {round(y)} z: {round(z)}
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={_toggle} style={styles.button}>
          <Text>Toggle</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
          <Text>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    marginTop: 15,
    paddingHorizontal: 10,
  },
});
