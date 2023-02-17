import { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { API, Auth } from "aws-amplify";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/FontAwesome5";

import { fetchNutrition } from "../../redux/features/NutritionSlice";
import { DateHeader } from "./DateHeader";
import { DailySummary } from "./DailySummary";
import { MealsSummary } from "./MealsSummary";
import { AddItemModal } from "./AddItemModal";

export const HomeScreen = ({ signOut }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    // AsyncStorage.clear()
    let todayDate: Date | string = new Date();
    todayDate = todayDate.toLocaleDateString();
    dispatch(fetchNutrition({ id: todayDate }));
  }, []);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <DateHeader />
          <DailySummary />
          <MealsSummary />
          <NavBar setShowModal={setShowModal} signOut={signOut} />
        </View>
        {showModal && (
          <AddItemModal showModal={showModal} setShowModal={setShowModal} />
        )}
      </SafeAreaView>
    </>
  );
};

const NavBar = ({ setShowModal, signOut }) => {
  const deleteDay = async (primaryKey, sortKey) => {
    API.del("nutritionAPI", "/items/object/" + primaryKey + "/" + sortKey, {})
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => alert("Food")}>
        <View style={styles.navbar_icon}>
          <Icon name="utensils" size={30} color="#65C18C" />
          <Text style={{ color: "#65C18C" }}>Food</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <View style={styles.navbar_icon}>
          <Icon name="plus" size={30} color="#65C18C" />
          <Text style={{ color: "#65C18C" }}>Add</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => signOut()}>
        <View style={styles.navbar_icon}>
          <Icon name="user-circle" size={30} color="#65C18C" />
          <Text style={{ color: "#65C18C" }}>Profile</Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setShowModal(true);
          }}
        >
          <Text> Add Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => signOut()}>
          <Text> Sign Out</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            deleteDay("us-east-1:5e3af46b-321c-4ef9-8c46-15d2a4e28232", "211")
          }
        >
          <Text> delete day</Text>
        </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    // alignItems: 'center',
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  navbar_icon: {
    alignItems: "center",
  },
});
