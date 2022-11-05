import { useState, useEffect } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useDispatch } from "react-redux"

import { addItem } from "../redux/features/TodaysNutritionSlice"
import { Background1 } from "./gradients/Background1"


export const AddItemScreen = () => {
    const dispatch = useDispatch()
    const [item, setItem] = useState({
        name: '',
        calories: 0,
        proteins: 0,
        carbohydrates: 0,
        fast: 0,
    })

    return (<>
        <Background1>
            <View >
                <Text>Enter Item</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={(event) => setItem(prevState => ({...prevState, name: event})) }
                    value={item.name}
                />

                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.row2}>
                        <Text> Calories</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(event) => setItem(prevState => ({...prevState, calories: parseInt(event)})) }
                            keyboardType={'numeric'}
                            value={item.calories}
                        />
                        <Text> Protein</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(event) => setItem(prevState => ({...prevState, proteins: parseInt(event)})) }
                            keyboardType={'numeric'}
                            value={item.proteins}
                        />
                    </View>
                    <View style={styles.row2}>
                        <Text> Carbs</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(event) => setItem(prevState => ({...prevState, carbohydrates: parseInt(event)})) }
                            keyboardType={'numeric'}
                            value={item.carbohydrates}
                        />
                        <Text> Fat</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(event) => setItem(prevState => ({...prevState, fats: parseInt(event)})) }
                            keyboardType={'numeric'}
                            value={item.fats}
                        />
                    </View>
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            dispatch(addItem(item))
                            console.log(item)
                        }}
                    >
                        <Text>Add</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Background1>
    </>)
}

const styles = StyleSheet.create({
    row2: {
        flex: 2
    },
    input: {
        backgroundColor: "#fff",
        width: '50%'
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
    },
})
