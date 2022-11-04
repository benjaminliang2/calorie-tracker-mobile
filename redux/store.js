import {configureStore} from '@reduxjs/toolkit'
import todaysNutritionReducer from '../components/features/TodaysNutritionSlice'

export default configureStore({
    reducer:{
        todaysNutrition: todaysNutritionReducer,
    }
})