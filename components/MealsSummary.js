import { useSelector } from "react-redux"
import { SafeAreaView, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native"

import { Background1 } from "./gradients/Background1"
import {MealCard} from './MealCard'

export const MealsSummary = ({ navigation }) => {
    const { items } = useSelector((store) => store.todaysNutrition)

    return (<>
        <Background1>
            {/* <SafeAreaView> */}
                <ScrollView>
                    {items.map(item => (
                        <MealCard item={item} />
                    ))}
                    <MealCard />
                    <MealCard />
                </ScrollView>

            {/* </SafeAreaView> */}
        </Background1>
    </>)



}

