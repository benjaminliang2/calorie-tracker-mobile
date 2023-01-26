import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'


const Input = ({ value, onChange, icon, ...props }) => (
  <>
    <View style={styles.container}>
      {icon ?
        <Icon name={icon} size={25} color="#65C18C" />
        :
        null
      }
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </View>
  </>
);

export default Input;

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10
  },
  input: {
    height: 45,
    margin: 5,
    padding: '3%',
    // width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 18,
  },
});
