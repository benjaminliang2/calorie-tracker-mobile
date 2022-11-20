import { Provider } from 'react-redux'
import store from './redux/store'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import { HomeScreen } from './components/HomeScreen';
import { AddItemScreen } from './components/AddItemScreen';
import { MealsSummary } from './components/MealsSummary';

let customFonts = {
  MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
  MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
  MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
  MontserratSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
  MontserratThin: require('./assets/fonts/Montserrat-Thin.ttf'),
}


export default function App(navigation) {

  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return null
  }

  const Stack = createNativeStackNavigator()




  return (
    <Provider store={store}>
      {/* <SafeAreaProvider> */}

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
          <Stack.Screen
            name="MealsSummary"
            component={MealsSummary}
          />
        </Stack.Navigator>

      </NavigationContainer>
      {/* </SafeAreaProvider> */}
    </Provider>
  );
}
