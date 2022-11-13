import { useSelector } from "react-redux";
// import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaView, Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign'

import { Background1 } from './gradients/Background1';
import { NutritionValue } from './NutritionValue';
import { DateHeader } from "./DateHeader";


export const HomeScreen = ({ navigation }) => {

    return (<>
            <SafeAreaView>
                <DaySummary navigation={navigation} />
            </SafeAreaView>
    </>)
}

export const DaySummary = ({ navigation }) => {
    const { calories, proteins, carbohydrates, fats } = useSelector((store) =>
        store.todaysNutrition
    )

    return (<>

        <View style={styles.container}>
            <DateHeader/>
            <TouchableOpacity onPress={() => navigation.navigate("DetailedDayView")}>

                <View style={styles.title}>
                    <Icon name='caretleft' size={30} color="#C8FFD4" />
                    <Text style={styles.innerToptitle}>Today</Text>
                    <Icon name='caretright' size={30} color="#C8FFD4" />
                </View>

                <View>
                    <NutritionValue title={'Calories'} value={calories} />
                    <NutritionValue title={'Protein'} value={proteins} />
                    <NutritionValue title={'Carb'} value={carbohydrates} />
                    <NutritionValue title={'Fat'} value={fats} />
                </View>


            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate("AddItemScreen")
                }}
            >
                <Text>Add</Text>
            </TouchableOpacity>

        </View>
    </>)
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        // flex: 1,
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    innerToptitle: {
        fontSize: 30
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