import React from 'react';
import store from '../../redux/store';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../pages/HomeScreen';
import { MenuProvider } from 'react-native-popup-menu';
import { Provider } from 'react-redux';
const AppStack = createStackNavigator();

export default function App({ signOut }) {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Home">
                {() =>
                    <Provider store={store}>
                        <MenuProvider>
                            <HomeScreen signOut={signOut} />
                        </MenuProvider>
                    </Provider>
                }
            </AppStack.Screen>
            
        </AppStack.Navigator>
    );
}