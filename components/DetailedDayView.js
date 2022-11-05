import { useSelector } from "react-redux"
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"



export const DetailedDayView = ({navigation}) => {
    const { items } = useSelector((store) => store.todaysNutrition)

    return (<>
        <SafeAreaView>
            {/* <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Text> Back </Text>
            </TouchableOpacity> */}
            <ScrollView>
                {items.map(item => (
                    <FoodCard item={item} />
                ))}
            </ScrollView>

        </SafeAreaView>
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