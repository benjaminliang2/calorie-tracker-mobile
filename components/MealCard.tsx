import { useState } from "react"
import { useAppDispatch } from "../redux/hooks"
import { Image, StyleSheet, Text, View } from "react-native"
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { removeItem } from "../redux/features/NutritionSlice"
import { ConfirmModal } from "./ConfirmModal"

import { Item } from "../redux/features/NutritionSlice"
interface Props {
    item: Item,
    key: string
}
export const MealCard = (props:Props) => {
    const dispatch = useAppDispatch()
    const [deleteModal, setDeleteModal] = useState(false)
    const { image, name, calories, proteins, carbohydrates, fats } = props.item
    return (
        <>
            <View style={styles.container}>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={{ justifyContent: 'space-between', flex: 1 }}>

                    <Text style={styles.title}>{name}</Text>
                    <View style={styles.nutritionContainer}>
                        <View style={styles.verticalCentered}>
                            <Text style={styles.heading1}> Cal</Text>
                            <Text style={styles.heading1}> {calories}</Text>
                        </View>
                        <View style={styles.verticalCentered}>
                            <Text style={styles.heading1}> Protein</Text>
                            <Text style={styles.heading1}> {proteins}</Text>
                        </View>
                        <View style={styles.verticalCentered}>

                            <Text style={styles.heading1}> Carbs</Text>
                            <Text style={styles.heading1}> {carbohydrates} </Text>

                        </View>
                        <View style={styles.verticalCentered}>
                            <Text style={styles.heading1}> Fat </Text>
                            <Text style={styles.heading1}> {fats} </Text>
                        </View>
                    </View>
                </View>

                <Menu>
                    <MenuTrigger>
                        <Icon name='dots-horizontal' size={34} color="#65C18C" />
                    </MenuTrigger>
                    <MenuOptions>
                        <MenuOption onSelect={() => alert(`Save`)} text='Edit' />
                        <MenuOption onSelect={() => dispatch(removeItem(props.item))} >
                            <Text style={{ color: 'red' }}>Delete</Text>
                        </MenuOption>
                    </MenuOptions>
                </Menu>
            </View>

            {deleteModal &&
                <ConfirmModal
                    title="Are you sure you want to delete food?" 
                    action={removeItem} 
                    actionName="Delete" 
                    value={props.item}
                    setShowModal={setDeleteModal}
                    showModal={deleteModal}

                />}
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 7,
        margin: 5,
        backgroundColor: 'white',
        shadowColor: '#285430',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 5,

    },
    image: {
        width: 60,
        height: 60,
        marginRight: 10,
        marginLeft: 10,

    },
    nutritionContainer: {
        flexDirection: 'row',
    },
    title: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 20,
    },
    heading1: {
        fontFamily: 'MontserratRegular',
        color: '#748B9C',
    },
    heading2: {
        fontFamily: 'MontserratBold'
    },
    verticalCentered: {
        alignItems: 'flex-end',
        flex: 1
    },

})

