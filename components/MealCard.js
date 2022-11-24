import { Image, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'

export const MealCard = ({ item = {image: '', name: 'Strawberry Smoothie', calories: 579, proteins: 20, carbohydrates: 10, fats: 4 } }) => {
    const { image, name, calories, proteins, carbohydrates, fats } = item
    return (
        <>

            <View style={cardStyles.container}>
                <Image source={{uri: image}} style={{ width: 60, height: 60, borderColor: 'white', borderWidth: '4' }} />
                <View style={{ flex:1 , justifyContent: 'space-between' }}>

                    <Text style={cardStyles.title}>{name}</Text>
                    <View style={cardStyles.nutritionContainer}>
                        <Text style={cardStyles.heading1}> Cal: {calories}</Text>
                        <Text style={cardStyles.heading1}> Pro: {proteins}g </Text>
                        <Text style={cardStyles.heading1}> Carb: {carbohydrates}g </Text>
                        <Text style={cardStyles.heading1}> Fat: {fats}g </Text>
                    </View>
                </View>
            </View>
        </>
    )
}
const cardStyles = {
    container: {
        flexDirection: 'row',
        borderColor: '#53B175',
        borderWidth: '1px',
        borderRadius: '15px',
        padding: 7,
        margin: 5
    },
    nutritionContainer: {
        flexDirection: 'row',
    },
    title: {
        fontFamily: 'MontserratSemiBold'
    },
    heading1: {
        fontFamily: 'MontserratBold'
    },
    heading2: {
        fontFamily: 'MontserratBold'
    }
}

