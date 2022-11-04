import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    calories: 0,
    proteins: 0,
    carbohydrates: 0,
    fats: 0,

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
        }
    }, 
})

export const {addCalories, addProteins, addCarbohydrates, addFats} = todaysNutritionSlice.actions
export default todaysNutritionSlice.reducer