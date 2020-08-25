import React from 'react'
import {View, Text, Button} from 'react-native'


export default function Gallery({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sensor Gallery</Text>
        <Button
          title="Go to Accelerometer"
          onPress={() => navigation.navigate('Accelerometer')}
        />
      </View>
    );
  }
