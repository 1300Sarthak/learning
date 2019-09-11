import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on the app!');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="click to continue" onPress={() => setOutputText('u been gnomed')} />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA4BE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
