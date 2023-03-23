import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../pages/SignInScreen';
import SignUpScreen from '../pages/SignUpScreen';

const AuthStack = createStackNavigator();

export default function AuthNavigator({ signIn, loadApp }) {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn">
                {({ navigation }) => <SignInScreen signIn={signIn} navigation={navigation} />}
            </AuthStack.Screen>
            <AuthStack.Screen name="SignUp">
                {({ navigation }) => <SignUpScreen signIn ={signIn} loadApp={loadApp} navigation={navigation} />}
            </AuthStack.Screen>

        </AuthStack.Navigator>
    );

}

