import {configureStore} from '@reduxjs/toolkit'
import todaysNutritionReducer from './features/TodaysNutritionSlice'

export default configureStore({
    reducer:{
        todaysNutrition: todaysNutritionReducer,
    }
})