import { useRef } from "react"
import { useState, useEffect } from "react"
import { Button, ImageBackground, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import * as ImagePicker from 'expo-image-picker'
import { useAppDispatch } from "../redux/hooks"
import Icon from 'react-native-vector-icons/FontAwesome5'
import CheckBox from 'expo-checkbox'

import { addItem } from "../redux/features/NutritionSlice"

interface Props {
    showModal: boolean, 
    setShowModal: Function
}

export const AddItemModal = ({ showModal, setShowModal }) => {
    let today = new Date()
    const dispatch = useAppDispatch()
    const [item, setItem] = useState({
        image: 'https://reactnative.dev/img/tiny_logo.png',
        name: '',
        id: '',
        calories: 0,
        proteins: 0,
        carbohydrates: 0,
        fats: 0,
    })
    const calorieInput = useRef(null)
    const carbInput = useRef(null)
    const proteinInput = useRef(null)
    const fatInput = useRef(null)

    useEffect(()=>{
        if (item.id !== ''){
            dispatch(addItem(item))
            setShowModal(false)
        }
    },[item.id])
    // const pickImage = async () => {
    //     // No permissions request is necessary for launching the image library
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         allowsEditing: true,
    //         aspect: [3, 3],
    //         quality: 1,
    //     });

    //     console.log(result);

    //     if (!result.cancelled) {
    //         setItem(prevState => ({ ...prevState, image: result.uri }))

    //     }
    // };

    const takePicture = async () => {
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [3, 3],
            quality: 0.5,
        })
        if (!result.cancelled) {
            const {uri} = result as ImagePicker.ImageInfo
            setItem(prevState => ({ ...prevState, image: uri }))
        }
    }

    return (<>
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                    setShowModal(!showModal);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <Pressable onPress={takePicture}>
                            <ImageBackground
                                style={styles.image}
                                resizeMode='cover'
                                source={{ uri: item.image }}
                            >
                                <Icon name='camera' size={25} color="#65C18C" style={{ margin: 10, position: 'absolute', right: 0, bottom: 0, }} />
                            </ImageBackground>
                        </Pressable>


                        <Text>Enter Item</Text>

                        <TextInput
                            style={styles.input}
                            onChangeText={(event) => setItem(prevState => ({ ...prevState, name: event }))}
                            value={item.name}
                        />

                        <View style={{ flexDirection: 'row' }}>


                            <View style={styles.macroColumn}>
                                <Pressable style={styles.container} onPress={() => calorieInput?.current?.focus()}>
                                    <Text style={styles.macro}> Calories</Text>
                                    <TextInput
                                        ref={calorieInput}
                                        style={styles.input}
                                        keyboardType={'numeric'}
                                        returnKeyType='done'
                                        onChangeText={(event) => setItem(prevState => ({ ...prevState, calories: parseInt(event) }))}
                                        value={`${item.calories}`}
                                        placeholder='0'
                                    />
                                    <Icon name='edit' size={18} color="#65C18C" style={{ margin: 10, position: 'absolute', right: 0, bottom: 0, }} />

                                </Pressable>

                                <Pressable style={styles.container} onPress={() => proteinInput?.current?.focus()}>
                                    <Text style={styles.macro}> Proteins</Text>
                                    <TextInput
                                        ref={proteinInput}
                                        style={styles.input}
                                        keyboardType={'numeric'}
                                        returnKeyType='done'
                                        onChangeText={(event) => setItem(prevState => ({ ...prevState, proteins: parseInt(event) }))}
                                        value={`${item.proteins}`}
                                        placeholder='0'
                                    />
                                    <Icon name='edit' size={18} color="#65C18C" style={{ margin: 10, position: 'absolute', right: 0, bottom: 0, }} />
                                </Pressable>
                            </View>


                            <View style={styles.macroColumn}>
                                <Pressable style={styles.container} onPress={() => carbInput?.current?.focus()}>
                                    <Text style={styles.macro}> Carbs</Text>
                                    <TextInput
                                        ref={carbInput}
                                        style={styles.input}
                                        keyboardType={'numeric'}
                                        returnKeyType='done'
                                        onChangeText={(event) => setItem(prevState => ({ ...prevState, carbohydrates: parseInt(event) }))}
                                        value={`${item.carbohydrates}`}
                                        placeholder='0'
                                    />
                                    <Icon name='edit' size={18} color="#65C18C" style={{ margin: 10, position: 'absolute', right: 0, bottom: 0, }} />
                                </Pressable>
                                <Pressable style={styles.container} onPress={() => fatInput?.current?.focus()}>
                                    <Text style={styles.macro}> Fats</Text>
                                    <TextInput
                                        ref={fatInput}
                                        style={styles.input}
                                        keyboardType={'numeric'}
                                        returnKeyType='done'
                                        onChangeText={(event) => setItem(prevState => ({ ...prevState, fats: parseInt(event) }))}
                                        value={`${item.fats}`}
                                        placeholder='0'
                                    />
                                    <Icon name='edit' size={18} color="#65C18C" style={{ margin: 10, position: 'absolute', right: 0, bottom: 0, }} />
                                </Pressable>
                            </View>


                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                            <CheckBox
                                style={{ margin: 10 }}
                                value={false}
                                onValueChange={() => console.log("checkbox")}
                                color={'#4630EB'}
                            />
                            <Text>Add to Favorites</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable style={styles.button} onPress={() => setShowModal(false)}>
                                <Text>Cancel</Text>
                            </Pressable>
                            <Pressable
                                onPress={() => item.name.trim() ?                               
                                    setItem(prevState => ({ ...prevState, id: item.name + today.getTime() }))  
                                    :
                                    alert('Please enter name')
                                }
                                style={styles.button}
                            >
                                <Text>Add</Text>
                            </Pressable>

                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    </>)
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        // justifyContent: 'center',
        // paddingTop: 22,
        marginTop: 50,
        backgroundColor: '#A4BE7B',
    },
    modalView: {
        // margin: 20,
        borderRadius: 20,
        padding: 35,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 8,
        elevation: 5,
    },

    image: {
        height: 150,
        width: 150,
        position: 'relative',
        alignSelf: 'center',

    },
    macroColumn: {
        flex: 1
    },
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        height: 100,
        margin: 10,
        borderRadius: 20,
        justifyContent: 'space-evenly',
        position: 'relative',


    },
    macro: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 20,
        color: '#B2B2B2'

    },
    input: {
        backgroundColor: "#fff",
        fontSize: 30,
        // width: "50%",
        textAlign: 'center',
    },
    button: {
        alignItems: "center",
        backgroundColor: "#fff",
        margin: 10,
        padding: 10,
        flex: 1,
    },
})
