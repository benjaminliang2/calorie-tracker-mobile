import { Text, View } from "react-native"
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';


export const NutritionValue = (props) => {
    const { title, value } = props

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

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
            <Text style={styles.subtitle}> {value} {label} </Text>
        </View>
    )

}

const styles = {
    macrocontainer: {
        alignItems: 'center',
        borderColor: '#53B175',
        borderWidth: '1px',
        borderRadius: '15px',
        padding: 7,
        width: '50%'

    },
    title: {
        fontSize: 18,
        fontFamily: 'Montserrat_600SemiBold',

    },
    subtitle: {
        fontSize: 25,
        fontFamily: 'Montserrat_700Bold'
    }
}