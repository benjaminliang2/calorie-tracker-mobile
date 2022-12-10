import { useDispatch, useSelector } from "react-redux"
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RootState, AppDispatch } from "../../redux/store"
import { setDate, Custom_date } from "../../redux/features/NutritionSlice"
import { useAppSelector, useAppDispatch } from "../../redux/hooks";


interface ItemProps {
    item: Custom_date, 
    onPress: () => void, //TODO: figure out expected type
    backgroundColor: any,
    textColor: any
}

let data: Custom_date[] = []
let today = new Date()
let prevDays = 365
for (let i = 0; i <= prevDays; i++) {
    let d = new Date();
    d.setDate(d.getDate() - i)
    data.push({
        id: d.toLocaleDateString(),
        title: d.getDate(),
        day: d.toLocaleDateString(undefined, {weekday: 'long', month: 'long', day: 'numeric'}),
    })
}
const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.dateTitle, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);

export const DateHeader = () => {
    const { date } = useSelector((store: RootState) => store.nutrition)
    const dispatch= useAppDispatch()
    // const width = Dimensions.get('window').width
    const renderItem = ({ item }) => {
        const backgroundColor = item.id === date.id ? "#033F40" : "#BDF0CC";
        const color = item.id === date.id ? '#BDF0CC' : '#033F40';

        return (
            <Item
                item={item}
                onPress={() => dispatch(setDate(item))}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    }

    return (<>
        <Text style={styles.title}>{today.toLocaleDateString() == date.id ? "Today" : date.day}</Text>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={date}
            horizontal={true}
            inverted={true}
            style={styles.scroll}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            snapToAlignment={'center'}
        />
    </>)
}


const styles = StyleSheet.create({
    scroll: {
        flexGrow: 0,
        marginHorizontal: 10,
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
    },
    title:{
        marginLeft: 10,
        marginTop: 15,
        marginBottom: 8,
        fontFamily: 'MontserratBold',
        fontSize: 18, 
    },
    dateTitle: {
        fontSize: 18,
        fontWeight: '900',
    },
});