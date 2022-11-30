import { useSelector } from "react-redux";
import { SafeAreaView, Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import CircularProgress from "react-native-circular-progress-indicator";

import { NutritionValue } from './NutritionValue';


export const DailySummary = () => {
    const { calories, proteins, carbohydrates, fats } = useSelector((store) =>
        store.nutrition
    )
    return (<>
    <Text style={styles.title}>Today's Nutrition</Text>
        <View style={styles.container}>
            <View style={{  alignItems: 'center'}}>
                <CircularProgress
                    value={calories}
                    radius={80}
                    duration={2000}
                    progressValueColor={'#285430'}
                    maxValue={2000}
                    title={'cal'}
                    titleColor={'#285430'}
                    titleStyle={{ fontWeight: 'bold' }}
                />
            </View>
            <View style={{  alignItems: 'center' }} >
                <NutritionValue title={'Protein'} valueConsumed={proteins} valueRequired={150}/>
                <NutritionValue title={'Carb'} valueConsumed={carbohydrates} valueRequired={300} />
                <NutritionValue title={'Fat'} valueConsumed={fats} valueRequired={90}/>
            </View>

        </View>

    </>)
}

const styles ={
    title: {
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 8,
        fontFamily: 'MontserratBold',
        fontSize: 28, 
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        margin: 10,
        borderRadius: 20,
        backgroundColor: '#BDF0CC',

    }
}