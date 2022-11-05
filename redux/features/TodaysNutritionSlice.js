import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    calories: 0,
    proteins: 0,
    carbohydrates: 0,
    fats: 0,
    items:[]

}

const todaysNutritionSlice = createSlice({
    name: 'todaysNutrition',
    initialState,
    reducers:{
        addCalories: (state, {payload}) => {
            state.calories += payload
        },
        addProteins: (state, {payload}) => {
            state.proteins += payload
        },
        addCarbohydrates: (state, {payload}) => {
            state.carbohydrates += payload
        },
        addFats: (state, {payload}) => {
            state.fats += payload
        },
        addItem: (state, {payload}) => {
            state.items.push(payload)
            state.calories += payload.calories
            state.proteins += payload.proteins
            state.fats += payload.fats
            state.carbohydrates += payload.carbohydrates
        }
    }, 
})

export const {addCalories, addProteins, addCarbohydrates, addFats, addItem} = todaysNutritionSlice.actions
export default todaysNutritionSlice.reducer