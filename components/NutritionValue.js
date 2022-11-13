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
        <View style = {styles.macrocontainer}>
            <Text style={styles.title}> {title} </Text>
            <Text style={styles.subtitle}> {value} {label} </Text>
        </View>
    )

}

const styles = {
    macrocontainer:{
        // alignItems: 'center',
        borderColor: 'green',
        borderWidth: '2px',
        borderRadius: '10px',
        // flex: 1,
    },
    title:{
        fontSize: 25,
    },
    subtitle:{
        fontSize: 15,
    }
}