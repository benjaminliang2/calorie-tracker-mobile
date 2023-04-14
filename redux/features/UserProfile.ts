import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { RootState, AppDispatch } from '../store'


interface UserProfileState {
    firstName: string,
    sex:'male' | "female",
    age: number,
    height: number,
    weight: number,
    targetWeight: number,
    activeStatus: 'very' | 'moderate' | 'some' | 'none',

}

const initialState: UserProfileState = {
    firstName: '',
    sex: 'female',
    age: 0,
    height: 0,
    weight: 0,
    targetWeight: 0,
    activeStatus: 'none'

}
const userProfileSlice = createSlice({
    name: 'userProfle',
    initialState,
    reducers: {
        setFirstName: (state, { payload }) => {
            state.firstName = payload
        },
        setSex: (state, {payload}) =>{
            state.sex = payload
            console.log(payload)
        },
        setAge: (state, { payload }) => {
            state.age = payload
        },
        setHeight: (state, { payload }) => {
            state.height = payload
        },
        setWeight: (state, { payload }) => {
            state.weight = payload
        },
        setTargetWeight: (state, { payload }) => {
            state.targetWeight = payload
        },
        setActiveStatus: (state, { payload }) => {
            state.activeStatus = payload
        },
    },
    extraReducers: () => {

    },
})

export const {setFirstName, setSex, setAge, setHeight, setWeight, setTargetWeight, setActiveStatus} = userProfileSlice.actions
export default userProfileSlice.reducer