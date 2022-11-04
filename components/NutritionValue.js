import { Text, View } from "react-native"


export const NutritionValue = (props) => {
    const { title, value } = props

    let label = ''
    switch (title) {
        case 'Calories':
            label = 'cal'
            break
        default:
            label = 'g'
    }

    return (
        <View>
            <Text> {title} </Text>
            <Text> {value} {label} </Text>
        </View>
    )

}