import { configureStore, createListenerMiddleware, isAnyOf,} from "@reduxjs/toolkit";
import nutritionReducer, {addItem, saveNutrition} from './features/NutritionSlice'

const listenerMiddleWare = createListenerMiddleware()
listenerMiddleWare.startListening({
    matcher: isAnyOf(addItem),
    effect: async (action, listenerAPI) => {
        listenerAPI.cancelActiveListeners();
        await listenerAPI.delay(50)
        listenerAPI.dispatch(saveNutrition())
    }
})


export default configureStore({
    reducer:{
        nutrition: nutritionReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(listenerMiddleWare.middleware)

})

