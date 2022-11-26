import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AsyncStorage from "@react-native-async-storage/async-storage"
const date = new Date()
const initialState = {
    date: `${date.toLocaleDateString()}`,
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
        const date = data.date
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
        //payload should be the date you are fetching data for. 
        try {
            const data = await AsyncStorage.getItem(payload)
            console.log(data)
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
        }
    },
    extraReducers: {
        [fetchNutrition.fulfilled]: (state, {payload}) => {
            console.log('fulfilled')
            state.date = payload.date
            state.calories = payload.calories
            state.proteins = payload.proteins
            state.carbohydrates = payload.carbohydrates
            state.fats = payload.fats
            state.items = payload.items 
            console.log(state)
        }, 
        [fetchNutrition.rejected]: (state, {payload}) => {
            console.log('no data found')
        },
    },
})



export const { addCalories, addProteins, addCarbohydrates, addFats, addItem } = nutritionSlice.actions
export default nutritionSlice.reducer