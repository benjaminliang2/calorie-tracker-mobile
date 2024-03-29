/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, Alert, Text, TouchableOpacity, Image
} from 'react-native';
import { Auth } from 'aws-amplify';
import CustomButton from '../components/Button';
import CustomInput from '../components/Input';


export default function SignIn({ navigation, signIn: signInCb }) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const signIn = async () => {
    if (email.length > 4 && password.length > 2) {
      await Auth.signIn(email, password)
        .then((user) => {
          signInCb(user);
        })
        .catch((err) => {
          if (!err.message) {
            console.log('1 Error when signing in: ', err);
            Alert.alert('Error when signing in: ', err);
          } else {
            if (err.code === 'UserNotConfirmedException') {
              console.log('User not confirmed');
              navigation.navigate('Confirmation', {
                email,
              });
            }
            if (err.message) {
              console.log(err.message)
              setErrorMessage(err.message);
            }
          }
        });
    } else {
      setErrorMessage('Provide a valid email and password');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../public/nutritrack_icon.png")}
        style={{ width: 100, height: 100 }}
      />
      <Text style={styles.title}>Login</Text>
      <CustomInput
        value={email}
        placeholder="email@example.com"
        onChange={(text) => onChangeEmail(text)}
        autoCompleteType="email"
        autoCapitalize="none"
        keyboardType="email-address"
        icon='envelope'
      />
      <CustomInput
        value={password}
        placeholder="PASSWORD"
        onChange={(text) => onChangePassword(text)}
        secureTextEntry
        autoCompleteType="password"
        icon='lock'
      />
      <CustomButton
        onPress={() => signIn()}
      >
        LOGIN
      </CustomButton>
      <View style={styles.pressableContainer}>
        <Text>Don't have an account?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.buttonLink}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
};

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
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 24,
    width: '100%',
    paddingVertical: 10,

  },
  pressableContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10,

  },
  buttonLink: {
    fontSize: 14,
    textDecorationLine: 'underline',
    color: '#285430',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
