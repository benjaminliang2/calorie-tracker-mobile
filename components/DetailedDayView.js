import { useSelector } from "react-redux"
import { SafeAreaView, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native"

import { Background1 } from "./gradients/Background1"


export const DetailedDayView = ({ navigation }) => {
    const { items } = useSelector((store) => store.todaysNutrition)

    return (<>
        <Background1>
            <SafeAreaView>
                <ScrollView>
                    {items.map(item => (
                        <FoodCard item={item} />
                    ))}
                </ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate("AddItemScreen")} >
                    <Text>Add Item</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Background1>
    </>)



}

export const FoodCard = ({ item }) => {
    const { name, calories, proteins, carbohydrates, fats } = item
    return (

        <View>
            <Text>{name}</Text>
            <Text> Calories: {calories} cal</Text>
            <Text> Protein: {proteins} g </Text>
            <Text> Carbohydrates: {proteins} g </Text>
            <Text> Fats: {proteins} g </Text>
        </View>
    )
}