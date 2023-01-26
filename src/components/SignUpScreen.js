
/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import { Auth, Hub } from 'aws-amplify';
import CustomButton from './Button';
import CustomInput from './Input';



export default function SignUpScreen({ navigation, signIn: signInCb, loadApp }) {
  const [name, onChangeName] = useState('test');
  const [email, onChangeEmail] = useState('test@gmail.com');
  const [password, onChangePassword] = useState('password');
  const [repeatPassword, onChangeRepeatPassword] = useState('password');
  const [invalidMessage, setInvalidMessage] = useState(null);

  const listener = (data) => {
    switch (data.payload.event) {
      case 'configured':
        console.log('the Auth module is configured');
        break;
      case 'signIn':
        console.log('user signed in');
        break;
      case 'signIn_failure':
        console.log('user sign in failed');
        break;
      case 'signUp':
        console.log('user signed up');
        break;
      case 'signUp_failure':
        lconsole.log('user sign up failed');
        break;
      case 'confirmSignUp':
        console.log('user confirmation successful');
        break;
      case 'completeNewPassword_failure':
        console.log('user did not complete new password flow');
        break;
      case 'autoSignIn':
        console.log('auto sign in successful');
        signInCb(data.payload.data) // returns <CognitoUser>
        break;
      case 'autoSignIn_failure':
        console.log('auto sign in failed');
        break;
    }
  };

  const signUp = async () => {
    const validPassword = password.length > 5 && (password === repeatPassword);
    if (validPassword) {
      setInvalidMessage(null);
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          email, // optional
          name,
        },
        autoSignIn: {
          enabled: true
        },
        validationData: [], // optional
      })
        .then((data) => {
          console.log(data)
          // signIn(data.user)
          Hub.listen('auth', listener)

        })
        .catch((err) => {
          if (err.message) {
            setInvalidMessage(err.message);
          }
          console.log(err);
        });
    } else {
      setInvalidMessage('Password must be equal and have greater length than 6.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account!</Text>

      <CustomInput
        value={name}
        placeholder="Name"
        onChange={(text) => onChangeName(text)}
        autoFocus
        icon="user"
      />
      <CustomInput
        value={email}
        placeholder="email@example.com"
        onChange={(text) => onChangeEmail(text)}
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="email-address"
        icon="envelope"
      />
      <CustomInput
        value={password}
        placeholder="PASSWORD"
        onChange={(text) => onChangePassword(text)}
        secureTextEntry
        autoCompleteType="password"
        icon="lock"
      />
      <CustomInput
        value={repeatPassword}
        placeholder="CONFIRM PASSWORD"
        onChange={(text) => onChangeRepeatPassword(text)}
        secureTextEntry
        autoCompleteType="password"
        icon="lock"
      />
      <CustomButton onPress={() => signUp()}>
        Sign Up
      </CustomButton>
      <View style={styles.pressableContainer}>
        <Text>Already have an account?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.buttonLink}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  title: {
    // width: '100%',
    textAlign: 'center',
    foneWeight: 'bold',
    fontSize: 20
  },
  pressableContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10
  },
  buttonLink: {
    fontSize: 14,
    textDecorationLine: 'underline',
    color: '#285430',
    fontWeight: 'bold',
    textAlign: 'center',
  },

});