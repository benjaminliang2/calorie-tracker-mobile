import { Provider } from "react-redux";
import store from "./redux/store";
import { useFonts } from "expo-font";
import { Amplify } from "aws-amplify";
import { Menu, MenuProvider } from "react-native-popup-menu";
import awsconfig from "./src/aws-exports";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AppNavigation from "./src/navigation/router"

import { HomeScreen } from "./src/components/HomeScreen";
Amplify.configure(awsconfig);

let customFonts = {
  MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
  MontserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
  MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
  MontserratSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
  MontserratThin: require("./assets/fonts/Montserrat-Thin.ttf"),
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) {
    return null;
  }
  return (
    // <Provider store={store}>
    //   <MenuProvider>
    //     <NavigationContainer>
    //       <Stack.Navigator>

    //         <Stack.Screen name="Home" component={HomeScreen} />
            
    //       </Stack.Navigator>
    //     </NavigationContainer>
    //   </MenuProvider>
    // </Provider>
    <AppNavigation/>
  );
}
