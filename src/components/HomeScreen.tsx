import { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAppDispatch } from "../../redux/hooks";
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
          <NavBar signOut={signOut} />
        </View>
        {showModal && (
          <AddItemModal showModal={showModal} setShowModal={setShowModal} />
        )}
      </SafeAreaView>
    </>
  );
};

const NavBar = ({ signOut }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => signOut()}>
        <View style={styles.navbar_icon}>
          <Icon name="user-circle" size={30} color="#65C18C" />
          <Text style={{ color: "#65C18C" }}>SIGN OUT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
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
