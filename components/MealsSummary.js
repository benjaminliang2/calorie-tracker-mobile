import { useSelector } from "react-redux"
import { SafeAreaView, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native"

import { Background1 } from "./gradients/Background1"
import { MealCard } from './MealCard'

export const MealsSummary = () => {
    const { items } = useSelector((store) => store.nutrition)

    return (<>
            <Text style={styles.title}>Food</Text>
            <ScrollView >
                {items.map(item => (
                    <MealCard item={item} key={item.id}/>
                ))}
            </ScrollView>
    </>)
}

const styles = {
    container: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 8,
    },
    title:{
        fontFamily: 'MontserratMedium',
        marginLeft: 15,
        fontSize: 20,
    }
}

