import { useState } from "react";
import { SafeAreaView, Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
// import { SafeAreaView } from 'react-native-safe-area-context';

import { Background1 } from './gradients/Background1';
import { DateHeader } from './DateHeader';
import { DailySummary } from './DailySummary';
import { MealsSummary } from "./MealsSummary";
import { AddItemModal } from "./AddItemModal";


export const HomeScreen = ({ navigation }) => {

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