import { Text, View } from "react-native"

import Icon from 'react-native-vector-icons/FontAwesome5'

export const DateHeader = () => {

    return (<>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', }}>
            <View style={{margin: 10}}>
                <Text style={{ fontFamily: 'MontserratRegular', fontSize: 14, lineHeight: 17, }} >Today</Text>
                <Text style={{ fontFamily: 'MontserratBold', fontSize: 18, lineHeight: 29, }}>Sat, Nov 12</Text>
            </View>
            <Icon name='calendar-alt' size={30} color="black"  style={{margin: 10}}/>

        </View>
    </>)
}