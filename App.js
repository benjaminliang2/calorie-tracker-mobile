import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/HomeScreen';
import { AddItemScreen } from './components/AddItemScreen';
import { Provider } from 'react-redux'
import store from './redux/store'

export default function App(navigation) {
  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="AddItemScreen"
            component={AddItemScreen}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  );
}
