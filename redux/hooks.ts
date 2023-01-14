import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store'

import { Amplify, API, Auth } from "aws-amplify";
import awsconfig from "../src/aws-exports";

// Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const addDay = async () => {
    API.post("nutritionAPI", "/items", {
      body: {
        userID: "testingID",
        dateID: "testingdate",
  
      },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  export const deleteDay = async () => {
    API.del("nutritionAPI", "/items/object/testingID/testingdate",{})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  
  export const signUp = async () => {
    Auth.signUp({
      username: 'test@test.com',
      password: 'testpassword',
      attributes: {
        email: 'test@test.com' , // optional
        name: 'testname',
      },
      validationData: [], // optional
    })
    .then((data)=>{
      console.log(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  };
  
  export const signIn = async () => {
    Auth.signIn('test@test.com', 'testpassword')
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }