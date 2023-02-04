import { useFonts } from "expo-font";
import { Amplify, API, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";

import AppNavigation from "./src/navigation/router"
Amplify.configure(awsconfig);

let customFonts = {
  MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
  MontserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
  MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
  MontserratSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
  MontserratThin: require("./assets/fonts/Montserrat-Thin.ttf"),
};

export default function App() {
  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) {
    return null;
  }
  return (

    <AppNavigation/>
  );
}
