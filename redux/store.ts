import { configureStore, createListenerMiddleware, isAnyOf,} from "@reduxjs/toolkit";
import nutritionReducer, {addItem, fetchNutrition, removeItem, saveNutrition, setDate} from './features/NutritionSlice'

const listenerMiddleWare = createListenerMiddleware()
listenerMiddleWare.startListening({
    matcher: isAnyOf(addItem, removeItem),
    effect: async (action, listenerAPI) => {
        listenerAPI.cancelActiveListeners();
        await listenerAPI.delay(50)
        listenerAPI.dispatch(saveNutrition())
    }
})

listenerMiddleWare.startListening({
    matcher: isAnyOf(setDate),
    effect: async (action, listenerAPI) => {
        listenerAPI.cancelActiveListeners();
        await listenerAPI.delay(50)
        listenerAPI.dispatch(fetchNutrition(action.payload))
    }
})

const store =  configureStore({
    reducer:{
        nutrition: nutritionReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(listenerMiddleWare.middleware)

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
