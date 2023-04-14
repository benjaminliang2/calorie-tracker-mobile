import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { RootState, AppDispatch } from '../store'

const today = new Date()

export interface Item {
    image: string,
    name: string, 
    id: string,
    calories: number,
    proteins: number,
    carbohydrates: number, 
    fats: number, 
}

export interface Custom_date {
    id: string,
    title?: number,
    day?: string
}

interface NutritionState {
    date: Custom_date,
    calories: number,
    proteins: number,
    carbohydrates: number, 
    fats: number, 
    items: Item[]
}


const initialState: NutritionState = {
    date: {
        id:`${today.toLocaleDateString()}`,
        title:  today.getDate(),
        day:  `${today.toLocaleDateString(undefined, {weekday: 'long', month: 'long', day: 'numeric'})}`,
    },
    calories: 0,
    proteins: 0,
    carbohydrates: 0,
    fats: 0,
    items: []

}
export const saveNutrition = createAsyncThunk<
    void,
    void,
    {
        dispatch: AppDispatch,
        state: RootState,
    }
    >('nutrition/saveNutrition', async (payload, thunkAPI) => {
        const data = thunkAPI.getState().nutrition
        const date = data.date.id
        try {
            await AsyncStorage.setItem(date, JSON.stringify(data))
        } catch (error) {
            alert(error)
        }
    })

export const fetchNutrition = createAsyncThunk<
    NutritionState,
    Custom_date,
    {
        dispatch: AppDispatch,
        state: RootState,
    }
    >('nutrition/fetchNutrition',async (payload, thunkAPI) => {
        try {
            const data = await AsyncStorage.getItem(payload.id)
            if (data != null) return JSON.parse(data)
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
        removeItem: (state, {payload}) => {
            state.items = state.items.filter(function(item){
                return item.id !== payload.id
            })
            state.calories -= payload.calories
            state.proteins -= payload.proteins
            state.fats -= payload.fats
            state.carbohydrates -= payload.carbohydrates
        },
        setDate: (state, {payload}) =>{
            state.date = payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchNutrition.fulfilled, (state, { payload }) => {
            state.date = payload.date
            state.calories = payload.calories
            state.proteins = payload.proteins
            state.carbohydrates = payload.carbohydrates
            state.fats = payload.fats
            state.items = payload.items 
        })
        builder.addCase(fetchNutrition.rejected, (state, { payload }) => {
            state.calories = 0
            state.proteins = 0
            state.carbohydrates = 0
            state.fats = 0
            state.items = []
        })
    },
})



export const { addCalories, addProteins, addCarbohydrates, addFats, addItem, removeItem, setDate } = nutritionSlice.actions
export default nutritionSlice.reducer