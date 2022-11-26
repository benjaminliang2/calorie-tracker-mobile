import { useSelector } from "react-redux";
import { SafeAreaView, Keyboard, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native"
import CircularProgress from "react-native-circular-progress-indicator";

import { NutritionValue } from './NutritionValue';


export const DailySummary = () => {
    const { calories, proteins, carbohydrates, fats } = useSelector((store) =>
        store.nutrition
    )


    return (<>
        {/* <TouchableOpacity onPress={() => navigation.navigate("DetailedDayView")} style={{ flex: 1 }}> */}
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, alignItems: 'center'}}>

                <CircularProgress
                    value={calories}
                    radius={80}
                    duration={2000}
                    progressValueColor={'black'}
                    maxValue={2000}
                    title={'cal'}
                    titleColor={'black'}
                    titleStyle={{ fontWeight: 'bold' }}
                />
            </View>
            <View style={{ flex: 1, alignItems: 'center' }} >
                <NutritionValue title={'Protein'} value={proteins} />
                <NutritionValue title={'Carb'} value={carbohydrates} />
                <NutritionValue title={'Fat'} value={fats} />
            </View>

        </View>


        {/* </TouchableOpacity> */}

    </>)
}