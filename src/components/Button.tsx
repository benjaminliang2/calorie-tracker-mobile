import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';

interface ButtonProps {
  onPress: any,
  children: any,
  backgroundColor? : string
}

const Button = ({ onPress, children, backgroundColor }: ButtonProps) => {
  const btnStyle = backgroundColor ? [styles.buttonStyle, { backgroundColor }] : styles.buttonStyle;
  return (
    <TouchableHighlight
      onPress={onPress}
      style={btnStyle}
    >
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    paddingVertical: 15,
    backgroundColor: '#29c43e',
    borderColor: 'white',
    borderRadius: 23,
    borderWidth: 1,
    paddingHorizontal: 30,
    // width: '100%',

  },
  textStyle: {
    fontSize: 18,
    fontFamily: 'MontserratMedium',
    color: 'white',
    textAlign: 'center'
  },
});