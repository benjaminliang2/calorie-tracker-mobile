import { Text, View } from "react-native"
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';

import Icon from 'react-native-vector-icons/FontAwesome5'

export const DateHeader = () => {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (<>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', }}>
            <View style={{margin: 10}}>
                <Text style={{ fontFamily: 'Montserrat_400Regular', fontSize: 14, lineHeight: 17, }} >Today</Text>
                <Text style={{ fontFamily: 'Montserrat_700Bold', fontSize: 18, lineHeight: 29, }}>Sat, Nov 12</Text>
            </View>
            <Icon name='calendar-alt' size={30} color="black"  style={{margin: 10}}/>

        </View>
    </>)
}