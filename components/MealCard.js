import { Image, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'

export const MealCard = ({ item = { image: 'https://reactnative.dev/img/tiny_logo.png', name: 'Strawberry Smoothie', calories: 579, proteins: 20, carbohydrates: 10, fats: 4 } }) => {
    const { image, name, calories, proteins, carbohydrates, fats } = item
    return (
        <>

            <View style={styles.container}>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={{ justifyContent: 'space-between', flex: 1 }}>

                    <Text style={styles.title}>{name}</Text>
                    <View style={styles.nutritionContainer}>
                        <View style={styles.verticalCentered}>
                            <Text style={styles.heading1}> Cal</Text>
                            <Text style={styles.heading1}> {calories}</Text>
                        </View>
                        <View style={styles.verticalCentered}>
                            <Text style={styles.heading1}> Protein</Text>
                            <Text style={styles.heading1}> {proteins}</Text>
                        </View>
                        <View style={styles.verticalCentered}>

                            <Text style={styles.heading1}> Carbs</Text>
                            <Text style={styles.heading1}> {carbohydrates} </Text>

                        </View>
                        <View style={styles.verticalCentered}>
                            <Text style={styles.heading1}> Fat </Text>
                            <Text style={styles.heading1}> {fats} </Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}
const styles = {
    container: {
        flexDirection: 'row',
        padding: 7,
        margin: 5,
        backgroundColor: 'white',
        shadowColor: '#748B9C',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 5,
        
    },
    image: {
        width: 60,
        height: 60,
        marginRight: 10,
        marginLeft: 10,

    },
    nutritionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 20,
    },
    heading1: {
        fontFamily: 'MontserratRegular',
        color: '#748B9C',
    },
    heading2: {
        fontFamily: 'MontserratBold'
    },
    verticalCentered: {
        alignItems: 'center',
        flex: 1
    },
}

