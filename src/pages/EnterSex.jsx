import React, { useState } from "react";
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useAppDispatch } from "../../redux/hooks";
import { setSex, setWeight } from "../../redux/features/UserProfile";

const EnterSex = ({ navigation }) => {
  const dispatch = useAppDispatch();


  const handleClick = () => {
    navigation.navigate("ConfirmGoal");
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            style={styles.image}
            source={require("../../public/select_sex.png")}
          />
          <Text style={styles.heading1}>Get started by entering some details about yourself. </Text>
          <Text style={styles.heading2}> Select your sex. It's necessary to provide accurate nutritional estimates for your body.</Text>
        </View>
        <View style={styles.pressableContainer}>
          <Pressable style={styles.button} onPress={()=>{dispatch(setSex('male')), navigation.navigate("Enter Weight")}}>
            <Text style={styles.buttonText}> Male</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={()=>{dispatch(setSex('female')), navigation.navigate("Enter Weight")}}>
            <Text style={styles.buttonText}> Female</Text>
          </Pressable>
        </View>
      </View>

    </>
  );
};

export default EnterSex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    // marginHorizontal: 30,

  },
  image: {
    height: 350,
    width: 350,
    alignSelf: "center",
  },
  heading1: {
    textAlign: "center",
    // fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 10,
    color: "#333"
  },
  heading2: {
    textAlign: "center",
    // fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 10,
    color: "#333"
  },
  pressableContainer: {
    flexDirection: "row",
    width: '100%',
    justifyContent: "space-between",
    marginVertical: 10,
  },
  button: {
    width: '42%',
    backgroundColor: '#29c43e',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    paddingVertical: 15
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});
