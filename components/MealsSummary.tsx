import { useSelector } from "react-redux"
import { RootState } from "../redux/store";

import { ScrollView, StyleSheet, Text} from "react-native"

import { MealCard } from './MealCard'

export const MealsSummary = (): JSX.Element => {
    const { items } = useSelector((store: RootState) => store.nutrition)
    let title: string = 'Food'
    return (<>
            <Text style={styles.title}>{title}</Text>
            <ScrollView >
                {items.map(item => (
                    <MealCard item={item} key={item.id}/>
                ))}
            </ScrollView>
    </>)
}

const styles = StyleSheet.create({
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
})

