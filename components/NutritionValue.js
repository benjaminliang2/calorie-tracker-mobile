import * as Progress from 'react-native-progress'
import { Text, View } from "react-native"


export const NutritionValue = (props) => {
    const { title, valueConsumed, valueRequired } = props


    let label = ''
    switch (title) {
        case 'Calories':
            label = 'cal'
            break
        default:
            label = 'g'
    }

    return (
        <View style={styles.macrocontainer}>
            <Text style={styles.title}> {title} </Text>
            <Progress.Bar progress={valueConsumed/valueRequired} width={75} height={2} color="#5F8D4E" />
            <Text style={styles.subtitle}> {valueConsumed} / {valueRequired} {label} </Text>
        </View>
    )

}

const styles = {
    macrocontainer: {
        alignItems: 'center',
        padding: 7,
        width: '100%',
        marginVertical: 5,


    },
    title: {
        fontSize: 15,
        fontFamily: 'MontserratSemiBold',
        color: '#A4BE7B'
    },
    subtitle: {
        fontSize: 15,
        fontFamily: 'MontserratBold',
        color: '#285430'

    }
}