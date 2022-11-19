// import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaView, Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"

import { Background1 } from './gradients/Background1';
import { DateHeader } from './DateHeader';
import {DailySummary} from './DailySummary';
import { MealsSummary } from "./MealsSummary";


export const HomeScreen = ({ navigation }) => {

    return (<>
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <DateHeader />
                <DailySummary navigation={navigation} />
                <MealsSummary/>
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("AddItemScreen") }}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    </>)
}



const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        flex: 1,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        flex: 1
    },
});