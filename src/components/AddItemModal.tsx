import { useRef } from "react";
import { useState, useEffect } from "react";
import {
  Button,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useAppDispatch } from "../../redux/hooks";
import Icon from "react-native-vector-icons/FontAwesome5";
import CheckBox from "expo-checkbox";

import { API, Auth } from "aws-amplify";

import { addItem } from "../../redux/features/NutritionSlice";

interface Props {
  showModal: boolean;
  setShowModal: Function;
}

export const AddItemModal = ({ showModal, setShowModal }) => {
  let today = new Date();
  const dispatch = useAppDispatch();
  const [item, setItem] = useState({
    // image: "https://reactnative.dev/img/tiny_logo.png",
    image: null,
    name: "",
    id: "",
    calories: 0,
    proteins: 0,
    carbohydrates: 0,
    fats: 0,
  });
  const calorieInput = useRef(null);
  const carbInput = useRef(null);
  const proteinInput = useRef(null);
  const fatInput = useRef(null);

  useEffect(() => {
    if (item.id !== "") {
      dispatch(addItem(item));
      setShowModal(false);
      createItemDB();
    }
  }, [item.id]);

  const takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [3, 3],
      quality: 0.5,
    });
    if (!result.cancelled) {
      const { uri } = result as ImagePicker.ImageInfo;
      setItem((prevState) => ({ ...prevState, image: uri }));
    }
  };

  const createItemDB = async () => {
    API.post("nutritionAPI", "/items", {
      body: {
        userID: `${(await Auth.currentUserCredentials()).identityId}`,
        dateID: "1",
      },
      headers: {
        Authorization: `Bearer ${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
    })
      .then((result) => {
        // console.log(result)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            alert("Modal has been closed.");
            setShowModal(!showModal);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable onPress={takePicture}>
                <ImageBackground
                  style={styles.image}
                  resizeMode="cover"
                  source={
                    item.image
                      ? { uri: item.image }
                      : require("../../public/meal_placeholder.png")
                  }
                >
                  <Icon
                    name="camera"
                    size={25}
                    color="#fff"
                    style={{
                      margin: 10,
                      position: "absolute",
                      right: 0,
                      bottom: 0,
                    }}
                  />
                </ImageBackground>
              </Pressable>
              <View style={{margin: 10}}>
                <Text
                  style={{
                    fontFamily: "MontserratBold",
                    fontSize: 18,
                    marginTop: 10,
                    marginBottom: 20,
                    color: '#666e6e'
                  }}
                >
                  Enter Item
                </Text>

                <TextInput
                  style={styles.input}
                  onChangeText={(event) =>
                    setItem((prevState) => ({ ...prevState, name: event }))
                  }
                  value={item.name}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.macroColumn}>
                  <Pressable
                    style={styles.container}
                    onPress={() => calorieInput?.current?.focus()}
                  >
                    <Text style={styles.macro}> Calories</Text>
                    <TextInput
                      ref={calorieInput}
                      style={styles.input}
                      keyboardType={"numeric"}
                      returnKeyType="done"
                      onChangeText={(event) =>
                        setItem((prevState) => ({
                          ...prevState,
                          calories: parseInt(event),
                        }))
                      }
                      value={`${item.calories}`}
                      placeholder="0"
                    />
                    <Icon
                      name="edit"
                      size={18}
                      color="#65C18C"
                      style={{
                        margin: 10,
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                      }}
                    />
                  </Pressable>

                  <Pressable
                    style={styles.container}
                    onPress={() => proteinInput?.current?.focus()}
                  >
                    <Text style={styles.macro}> Proteins</Text>
                    <TextInput
                      ref={proteinInput}
                      style={styles.input}
                      keyboardType={"numeric"}
                      returnKeyType="done"
                      onChangeText={(event) =>
                        setItem((prevState) => ({
                          ...prevState,
                          proteins: parseInt(event),
                        }))
                      }
                      value={`${item.proteins}`}
                      placeholder="0"
                    />
                    <Icon
                      name="edit"
                      size={18}
                      color="#65C18C"
                      style={{
                        margin: 10,
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                      }}
                    />
                  </Pressable>
                </View>

                <View style={styles.macroColumn}>
                  <Pressable
                    style={styles.container}
                    onPress={() => carbInput?.current?.focus()}
                  >
                    <Text style={styles.macro}> Carbs</Text>
                    <TextInput
                      ref={carbInput}
                      style={styles.input}
                      keyboardType={"numeric"}
                      returnKeyType="done"
                      onChangeText={(event) =>
                        setItem((prevState) => ({
                          ...prevState,
                          carbohydrates: parseInt(event),
                        }))
                      }
                      value={`${item.carbohydrates}`}
                      placeholder="0"
                    />
                    <Icon
                      name="edit"
                      size={18}
                      color="#65C18C"
                      style={{
                        margin: 10,
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                      }}
                    />
                  </Pressable>
                  <Pressable
                    style={styles.container}
                    onPress={() => fatInput?.current?.focus()}
                  >
                    <Text style={styles.macro}> Fats</Text>
                    <TextInput
                      ref={fatInput}
                      style={styles.input}
                      keyboardType={"numeric"}
                      returnKeyType="done"
                      onChangeText={(event) =>
                        setItem((prevState) => ({
                          ...prevState,
                          fats: parseInt(event),
                        }))
                      }
                      value={`${item.fats}`}
                      placeholder="0"
                    />
                    <Icon
                      name="edit"
                      size={18}
                      color="#65C18C"
                      style={{
                        margin: 10,
                        position: "absolute",
                        right: 0,
                        bottom: 0,
                      }}
                    />
                  </Pressable>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CheckBox
                  style={{ margin: 10 }}
                  value={false}
                  onValueChange={() => console.log("checkbox")}
                  color={"#4630EB"}
                />
                <Text >Add to Favorites</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Pressable
                style={styles.cancel_button}
                onPress={() => setShowModal(false)}
              >
                <Text style={{fontFamily: "MontserratBold", color:'#B2B2B2', fontSize: 18}}>Cancel</Text>
              </Pressable>
              <Pressable
                onPress={() =>
                  item.name.trim()
                    ? setItem((prevState) => ({
                        ...prevState,
                        id: item.name + today.getTime(),
                      }))
                    : alert("Please enter item")
                }
                style={styles.add_button}
              >
                <Text style={{fontFamily: "MontserratBold", color:'#fff', fontSize: 18}}>Add</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: 'center',
    // paddingTop: 22,
    marginTop: 50,
    backgroundColor: "#fff",
  },
  modalView: {
    borderRadius: 20,
    padding: 35,
    shadowColor: "#698269",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 5,
  },

  image: {
    height: 150,
    width: 150,
    position: "relative",
    alignSelf: "center",
  },
  macroColumn: {
    flex: 1,
  },
  container: {
    backgroundColor: "white",
    alignItems: "center",
    height: 100,
    margin: 10,
    borderRadius: 20,
    justifyContent: "space-evenly",
    position: "relative",
  },
  macro: {
    fontFamily: "MontserratSemiBold",
    fontSize: 20,
    color: "#B2B2B2",
  },
  input: {
    backgroundColor: "#fff",
    fontSize: 24,
    textAlign: "left",
    padding: 10,
    borderRadius: 10,
  },
  cancel_button: {
    alignItems: "center",
    margin: 10,
    padding: 10,
    flex: 1,
    borderWidth: 4,
    borderColor: "#65C18C",
    borderRadius: 20,
  },
  add_button: {
    alignItems: "center",
    backgroundColor: "#65C18C",
    margin: 10,
    padding: 10,
    flex: 1,
    borderWidth: 4,
    borderColor: "#65C18C",
    borderRadius: 20,
  },
});
