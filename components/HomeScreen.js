import { useSelector } from "react-redux";

import { Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign'

import { Background1 } from './gradients/Background1';
import { NutritionValue } from './NutritionValue';


export const HomeScreen = ({ navigation }) => {


    return (<>
        <Background1>
            <DaySummary navigation={navigation} />
        </Background1>
    </>)
}

export const DaySummary = ({ navigation }) => {
    const { calories, proteins, carbohydrates, fats } = useSelector((store) =>
        store.todaysNutrition
    )

    return (<>

        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.navigate("DetailedDayView")}>

                <View style={styles.innerTop}>
                    <Icon name='caretleft' size={30} color="#C8FFD4" />
                    <Text style={styles.innerToptitle}>Today</Text>
                    <Icon name='caretright' size={30} color="#C8FFD4" />
                </View>

                <View style={styles.nutritionRow}>
                    <NutritionValue style={styles.nutritionValue} title={'Calories'} value={calories} />
                    <NutritionValue style={styles.nutritionValue} title={'Protein'} value={proteins} />
                </View>
                <View style={styles.nutritionRow}>
                    <NutritionValue style={styles.nutritionValue} title={'Carb'} value={carbohydrates} />
                    <NutritionValue style={styles.nutritionValue} title={'Fat'} value={fats} />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate("AddItemScreen")
                    }}
                >
                    <Text>Add</Text>
                </TouchableOpacity>
            </TouchableOpacity>

        </View>
    </>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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