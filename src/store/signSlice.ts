//先引入相關依賴
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

//1.定義state
interface SignState { // 定義 a type for the slice state
    currentStep: number,
    maxStep: number,
  }
  const initialState: SignState = { // 定義 the initial state using that type
    currentStep: 1,
    maxStep:3
  }

  //2.撰寫reducer函式
export const signSlice = createSlice({
    name: 'sign',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      increment: (state) => {
        if(state.currentStep > state.maxStep) return
        state.currentStep += 1
      },
      decrement: (state) => {
        if(state.currentStep < 0) return
        state.currentStep -= 1
      },
      // Use the PayloadAction type to declare the contents of `action.payload`
      incrementByAmount: (state, action: PayloadAction<number>) => {
        if(state.currentStep > state.maxStep) return
        state.currentStep += action.payload
      },
    },
  })

  //3.導出reducer
export const { increment, decrement, incrementByAmount } = signSlice.actions

//4.導出state
//Other code such as selectors can use the imported `RootState` type
export const selectCurrentStep = (state: RootState) => state.sign.currentStep

export default signSlice.reducer