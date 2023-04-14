import React from "react";
import { Pressable, Text } from "react-native";
import { Auth } from "aws-amplify";

const ConfirmGoal = ({ signIn: signInCb }) => {

    const setUserToken = async () => {
        await Auth.currentAuthenticatedUser()
        .then((user) => 
            signInCb(user)
        )
        .catch(err => console.log(err))
    }


    return (
    <>
      <Pressable onPress={() => setUserToken() }>
        <Text> confirm and sign in </Text>
      </Pressable>
    </>
  );
};

export default ConfirmGoal;
