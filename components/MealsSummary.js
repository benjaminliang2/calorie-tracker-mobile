import { useSelector } from "react-redux"
import { SafeAreaView, ScrollView, Text, Touchable, TouchableOpacity, View } from "react-native"

import { Background1 } from "./gradients/Background1"


export const MealsSummary = ({ navigation }) => {
    const { items } = useSelector((store) => store.todaysNutrition)

    return (<>
        <Background1>
            <SafeAreaView>
                <ScrollView>
                    {/* {items.map(item => (
                        <FoodCard item={item} />
                    ))} */}
                    <FoodCard/>
                    <FoodCard/>
                </ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate("AddItemScreen")} >
                    <Text>Add Item</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Background1>
    </>)



}

export const FoodCard = ({ item={name: 'Strawberry Smoothie', calories: 579, proteins: 20,carbohydrates: 10, fats: 4} }) => {
    const { name, calories, proteins, carbohydrates, fats } = item
    return (

        <View>
            <Text>{name}</Text>
            <Text> Calories: {calories} cal</Text>
            <Text> Protein: {proteins} g </Text>
            <Text> Carbohydrates: {carbohydrates} g </Text>
            <Text> Fats: {fats} g </Text>
        </View>
    )
}