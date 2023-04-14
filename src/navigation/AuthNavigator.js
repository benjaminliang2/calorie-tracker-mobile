import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import store from '../../redux/store';

import SignInScreen from '../pages/SignInScreen';
import SignUpScreen from '../pages/SignUpScreen';
import EnterSex from '../pages/EnterSex';
import EnterWeight from '../pages/EnterWeight';
import ConfirmGoal from '../pages/ConfirmGoal';
import EnterHeight from '../pages/EnterHeight';

const AuthStack = createStackNavigator();

export default function AuthNavigator({ signIn, loadApp }) {
    return (
        <AuthStack.Navigator>

            <AuthStack.Screen name="Enter Weight">
                {({ navigation }) =>
                    <Provider store={store}>
                        <EnterWeight navigation={navigation} />
                    </Provider>
                }
            </AuthStack.Screen>
            <AuthStack.Screen name="Enter Height">
                {({ navigation }) =>
                    <Provider store={store}>
                        <EnterHeight navigation={navigation} />
                    </Provider>
                }
            </AuthStack.Screen>
            <AuthStack.Screen name="Get Started">
                {({ navigation }) =>
                    <Provider store={store}>
                        <EnterSex navigation={navigation} />
                    </Provider>
                }
            </AuthStack.Screen>
            <AuthStack.Screen name="SignIn">
                {({ navigation }) => <SignInScreen signIn={signIn} navigation={navigation} />}
            </AuthStack.Screen>
            <AuthStack.Screen name="SignUp">
                {({ navigation }) => <SignUpScreen loadApp={loadApp} navigation={navigation} />}
            </AuthStack.Screen>
            <AuthStack.Screen name="ConfirmGoal">
                {() => <ConfirmGoal signIn={signIn} loadApp={loadApp} />}
            </AuthStack.Screen>

        </AuthStack.Navigator>
    );

}

