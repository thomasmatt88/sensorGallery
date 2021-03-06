// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Gallery from './components/Gallery'
import AccelerometerScreen from './components/AccelerometerScreen'
import GyroscopeScreen from './components/GyroscopeScreen'
import BarometerScreen from './components/BarometerScreen'
import MagnetometerScreen from './components/MagnetometerScreen'
import CameraScreen from './components/CameraScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Gallery">
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Accelerometer" component={AccelerometerScreen} />
        <Stack.Screen name="Barometer" component={BarometerScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Gyroscope" component={GyroscopeScreen} />
        <Stack.Screen name="Magnetometer" component={MagnetometerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
