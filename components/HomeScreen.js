import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage"


import { SafeAreaView, Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"

// import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchNutrition } from "../redux/features/NutritionSlice";

import { Background1 } from './gradients/Background1';
import { DateHeader } from './DateHeader';
import { DailySummary } from './DailySummary';
import { MealsSummary } from "./MealsSummary";
import { AddItemModal } from "./AddItemModal";


export const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        // AsyncStorage.clear()
        let todayDate = new Date()
        todayDate = todayDate.toLocaleDateString()

        dispatch(fetchNutrition({id: todayDate}))
    }, [])
    const [showModal, setShowModal] = useState(false)
    return (<>
        <SafeAreaView>
            <View style={styles.container}>
                <DateHeader />
                <DailySummary />
                <MealsSummary />
                <TouchableOpacity style={styles.button} onPress={() => {setShowModal(true)}}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
            {showModal && <AddItemModal showModal={showModal} setShowModal={setShowModal}/>}
        </SafeAreaView>
    </>)
}



const styles = StyleSheet.create({
    container: {
        height: '100%',
        // alignItems: 'center',
        backgroundColor: 'white',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
    },
});