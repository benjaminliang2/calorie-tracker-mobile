import React, { useState } from 'react'
import { useAppDispatch } from '../../redux/hooks';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { setWeight } from '../../redux/features/UserProfile'

const EnterWeight = ({ navigation }) => {
    const dispatch = useAppDispatch();

    const [value, setValue] = useState(0)
    const [unit, setUnit] = useState('lb')
    let weight = 0
    const handleClick = () => {

        if (unit == "kg") {
            weight = Math.round(value * 2.20462 * 10) / 10
        } else {
            weight = Math.round(value * 10) / 10
        }
        dispatch(setWeight(weight))
        console.log(weight)
        navigation.navigate("Enter Height")
    }
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image
                    style={styles.image}
                    source={require("../../public/select_sex.png")}
                />
                <View style={{ flexDirection: 'row', width: '50%', justifyContent: 'center', margin: 5}}>
                    <TextInput
                        onChangeText={event => setValue(event)}
                        value={value}
                        style={styles.input}
                        autoFocus={true}
                        keyboardType="numeric"
                    />
                    <Text style={styles.unit}>{unit}</Text>
                </View>

                <View style={styles.unitSelecion}>
                    <Pressable onPress={() => setUnit('lb')} style={unit == 'lb' ? styles.selectedUnit : styles.unselected}>
                        <Text style={styles.label}>lb</Text>
                    </Pressable>
                    <Pressable onPress={() => setUnit('kg')} style={unit == 'kg' ? styles.selectedUnit : styles.unselected}>
                        <Text style={styles.label}>kg</Text>
                    </Pressable>
                </View>

                <Text style={styles.text}>Enter your current weight</Text>
            </View>
            <Pressable style={styles.button} onPress={() => handleClick()}>
                <Text style={styles.buttonText}>Next</Text>
            </Pressable>
        </View>
    )
}

export default EnterWeight

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    topContainer:{
        backgroundColor: '#fff',
        width: '100%',
        alignItems: "center",
        borderRadius: 25,
        padding: 10,
        marginBottom: 25
    },
    image: {
        height: 150,
        width: 150,
        alignSelf: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 16,
        paddingVertical: 10,
        color: "#333"
    },
    unit: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#808080",
        alignSelf: 'flex-end',
        marginBottom: 3
    },
    input: {
        width: '50%',
        margin: 5,
        textAlign: 'center',
        borderBottomColor: '#29c43e',
        borderBottomWidth: 2,
        fontSize: 30,
    },
    button: {
        width: '45%',
        backgroundColor: '#29c43e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
        paddingVertical: 15
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    unitSelecion: {
        flexDirection: 'row',
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        
    },
    selectedUnit: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15,
        margin: 5,
    },
    unselected: {
        paddingHorizontal: 15,
        margin: 5,

    },
    label: {
        textAlign: "center",
        fontSize: 12,
        paddingVertical: 7,
        color: "#333"
    }
});
