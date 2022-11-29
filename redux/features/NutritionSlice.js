import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AsyncStorage from "@react-native-async-storage/async-storage"
const today = new Date()
const initialState = {
    date: {
        id:`${today.toLocaleDateString()}`,
        title:  `${today.getDate()}`,
        day:  `${today.toLocaleDateString(undefined, {weekday: 'long', month: 'long', day: 'numeric'})}`,
    },
    calories: 0,
    proteins: 0,
    carbohydrates: 0,
    fats: 0,
    items: []

}
export const saveNutrition = createAsyncThunk(
    'nutrition/saveNutrition',
    async (payload, thunkAPI) => {
        const data = thunkAPI.getState().nutrition
        const date = data.date.id
        try {
            await AsyncStorage.setItem(date, JSON.stringify(data))
        } catch (error) {
            alert(error)
        }
    }
)

export const fetchNutrition = createAsyncThunk(
    'nutrition/fetchNutrition',
    async (payload, thunkAPI) => {
        //payload should be the date OBJECT you are fetching data for. payload.id is the ID for date
        try {
            const data = await AsyncStorage.getItem(payload.id)
            if (data != null) return JSON.parse(data)
            // throw new Error('No data')
            return Promise.reject()
        } catch (error) {
            alert(error)
        }
    }
)

const nutritionSlice = createSlice({
    name: 'nutrition',
    initialState,
    reducers: {
        addCalories: (state, { payload }) => {
            state.calories += payload
        },
        addProteins: (state, { payload }) => {
            state.proteins += payload
        },
        addCarbohydrates: (state, { payload }) => {
            state.carbohydrates += payload
        },
        addFats: (state, { payload }) => {
            state.fats += payload
        },
        addItem: (state, { payload }) => {
            state.items.push(payload)
            state.calories += payload.calories
            state.proteins += payload.proteins
            state.fats += payload.fats
            state.carbohydrates += payload.carbohydrates
        },
        setDate: (state, {payload}) =>{
            state.date = payload
            console.log(state)
        },
    },
    extraReducers: {
        [fetchNutrition.fulfilled]: (state, {payload}) => {
            state.date = payload.date
            state.calories = payload.calories
            state.proteins = payload.proteins
            state.carbohydrates = payload.carbohydrates
            state.fats = payload.fats
            state.items = payload.items 
        }, 
        [fetchNutrition.rejected]: (state, {payload}) => {
            console.log('no data found')
            state.calories = 0
            state.proteins = 0
            state.carbohydrates = 0
            state.fats = 0
            state.items = []
        },
    },
})



export const { addCalories, addProteins, addCarbohydrates, addFats, addItem, setDate } = nutritionSlice.actions
export default nutritionSlice.reducer