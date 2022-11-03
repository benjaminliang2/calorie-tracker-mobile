import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Text, TextInput, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [todaysCalorie, setTodaysCalorie] = useState(0)
  const [calorie, setCalorie] = useState(100)

  const addCalorie = () => {
    setTodaysCalorie(prev => prev + parseInt(calorie))
    setCalorie(0)

  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>

      <View style={styles.container}>
        <Text>{todaysCalorie}</Text>
        <Text> Enter Calories </Text>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          onChangeText={setCalorie}
          value={calorie}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={addCalorie}
        >
          <Text>Press Here</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
