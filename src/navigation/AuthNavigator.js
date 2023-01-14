import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../components/SignInScreen';
import SignUpScreen from '../components/SignUpScreen';

const AuthStack = createStackNavigator();

export default function AuthNavigator({ signIn }) {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn">
                {({ navigation }) => <SignInScreen signIn={signIn} navigation={navigation} />}
            </AuthStack.Screen>
            <AuthStack.Screen name="SignUp">
                {({ navigation }) => <SignUpScreen signIn ={signIn} navigation={navigation} />}
            </AuthStack.Screen>

        </AuthStack.Navigator>
    );

}

