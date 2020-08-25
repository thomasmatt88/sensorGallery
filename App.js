// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Gallery from './components/Gallery'
import AccelerometerScreen from './components/AccelerometerScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Gallery} />
        <Stack.Screen name="Accelerometer" component={AccelerometerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
