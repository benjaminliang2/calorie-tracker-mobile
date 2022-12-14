import { Provider } from 'react-redux'
import store from './redux/store'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import {Amplify} from 'aws-amplify'
import awsconfig from './src/aws-exports'

import { HomeScreen } from './src/components/HomeScreen';
import { MenuProvider } from 'react-native-popup-menu';

Amplify.configure(awsconfig)

let customFonts = {
  MontserratRegular: require('./assets/fonts/Montserrat-Regular.ttf'),
  MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
  MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf'),
  MontserratSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
  MontserratThin: require('./assets/fonts/Montserrat-Thin.ttf'),
}


export default function App() {

  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <MenuProvider>
        <HomeScreen />
      </MenuProvider>
    </Provider>
  );
}
// //below are code snippets

// //creates a data model (todo or food)


// //query or retrieve data
// useEffect(() => {

//   //query the initial todolist and subscribe to data updates
//   const subscription = DataStore.observeQuery(Todo).subscribe((snapshot) => {
//     //isSynced can be used to show a loading spinner when the list is being loaded. 
//     const { items, isSynced } = snapshot;
//     setTodos(items);
//   });

//   //unsubscribe to data updates when component is destroyed so that you don’t introduce a memory leak.
//   return function cleanup() {
//     subscription.unsubscribe();
//   }

// }, []);

// //update todo or food. 

// async function setComplete(updateValue, todo) {
//   //update the todo item with updateValue
//   await DataStore.save(
//     Todo.copyOf(todo, updated => {
//       updated.isComplete = updateValue
//     })
//   );
// }

// //delete

// async function deleteTodo(todo) {
//   try {
//     await DataStore.delete(todo);
//   } catch (e) {
//     console.log('Delete failed: $e');
//   }
// }