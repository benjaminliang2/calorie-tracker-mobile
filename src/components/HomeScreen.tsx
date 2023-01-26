import { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { fetchNutrition } from "../../redux/features/NutritionSlice";
import { DateHeader } from './DateHeader';
import { DailySummary } from './DailySummary';
import { MealsSummary } from "./MealsSummary";
import { AddItemModal } from "./AddItemModal";


export const HomeScreen = ({signOut}) => {
    const dispatch = useAppDispatch()
    useEffect(()=>{
        // AsyncStorage.clear()
        let todayDate: Date | string = new Date()
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
                <NavBar setShowModal={setShowModal} signOut={signOut}/>
            </View>
            {showModal && <AddItemModal showModal={showModal} setShowModal={setShowModal}/>}
        </SafeAreaView>
    </>)
}

const NavBar = ({setShowModal, signOut}) => {
    return (
        <>
        <TouchableOpacity style={styles.button} onPress={() => {setShowModal(true)}}>
            <Text> Add Item</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => signOut()}>
            <Text> Sign Out</Text>
        </TouchableOpacity>
        </>
        )
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