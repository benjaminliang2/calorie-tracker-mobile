import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { StyleSheet, Text, View } from "react-native"

import CircularProgress from "react-native-circular-progress-indicator";

import { NutritionValue } from './NutritionValue';


export const DailySummary = (): JSX.Element => {
    
    const { calories, proteins, carbohydrates, fats } = useSelector((store: RootState) =>
        store.nutrition
    )
    let title: string = "Summary"
    let proteinRequired: number = 150
    let carbsRequired: number = 300
    let fatsRequired: number = 90

    return (<>
    <Text style={styles.title}>{title}</Text>
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
                <NutritionValue title={'Protein'} valueConsumed={proteins} valueRequired={proteinRequired}/>
                <NutritionValue title={'Carb'} valueConsumed={carbohydrates} valueRequired={carbsRequired} />
                <NutritionValue title={'Fat'} valueConsumed={fats} valueRequired={fatsRequired}/>
            </View>

        </View>

    </>)
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 10,
        marginTop: 5,
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
})