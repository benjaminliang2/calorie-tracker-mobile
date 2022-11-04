import { useState, useEffect } from 'react';
import { useDispatch,  useSelector } from "react-redux";
import { NutritionValue } from './NutritionValue';
import { addCalories, addProteins, addCarbohydrates, addFats } from './features/TodaysNutritionSlice';

import { StatusBar } from "expo-status-bar"
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign'



export const HomeScreen = () => {
    const dispatch = useDispatch()
    const {calories} = useSelector((store) =>
        store.todaysNutrition
    )

    const [calorie, setCalorie] = useState(0)

    return (<>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <View style={styles.container}>

                <View style={styles.innerTop}>
                    <Icon name='caretleft' size={30} color="#C8FFD4" />
                    <Text style={styles.innerToptitle}>Today</Text>
                    <Icon name='caretright' size={30} color="#C8FFD4" />
                </View>

                <View style={styles.nutritionRow}>
                    <NutritionValue style={styles.nutritionValue} title={'Calories'} value={calories} />
                    <NutritionValue style={styles.nutritionValue} title={'Protein'} value={125} />
                </View>
                <View style={styles.nutritionRow}>
                    <NutritionValue style={styles.nutritionValue} title={'Carb'} value={300} />
                    <NutritionValue style={styles.nutritionValue} title={'Fat'} value={68} />
                </View>

                <Text> Enter Calories </Text>
                <TextInput
                    style={styles.input}
                    keyboardType={'numeric'}
                    onChangeText={setCalorie}
                    value={calorie}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        dispatch(addCalories(parseInt(calorie)))
                        setCalorie(0)
                    }}
                >
                    <Text>Add</Text>
                </TouchableOpacity>

            </View>
        </TouchableWithoutFeedback>
    </>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerTop: {
        flexDirection: 'row'
    },
    innerToptitle: {
        fontSize: 30
    },
    nutritionRow: {
        flexDirection: "row"
    },
    nutritionValue: {
        flex: 2,
    },

    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});