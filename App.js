import { Provider } from 'react-redux'
import store from './redux/store'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts, Montserrat_400Regular,} from '@expo-google-fonts/montserrat';
import { HomeScreen } from './components/HomeScreen';
import { AddItemScreen } from './components/AddItemScreen';
import { MealsSummary } from './components/MealsSummary';

export default function App(navigation) {
  const Stack = createNativeStackNavigator()

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }


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
