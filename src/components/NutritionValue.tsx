import * as Progress from 'react-native-progress'
import { Text, View, StyleSheet } from "react-native"

interface Item {
    title: string,
    valueConsumed: number, 
    valueRequired: number,
}



export const NutritionValue = (props: Item): JSX.Element => {
    const { title, valueConsumed, valueRequired } = props


    let label:string = ''
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

const styles = StyleSheet.create ({
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
})