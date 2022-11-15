//先引入相關依賴
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Indecator } from '../types/gloable'

//1.定義state
interface SignState { // 定義 a type for the slice state
  currentStep: number,
  maxStep: number,
  stepIndecatorDataArray:Indecator[]
}
const initialState: SignState = { // 定義 the initial state using that type
  currentStep: 1,
  maxStep: 3,
  stepIndecatorDataArray:[
    {
        step:1,
        title:'上傳簽署檔案',
        active:false,
        done:false
    },
    {
        step:2,
        title:'進行簽署',
        active:false,
        done:false
    },
    {
        step:3,
        title:'完成簽署',
        active:false,
        done:false
    }
]
}

//2.撰寫reducer函式
export const signSlice = createSlice({
  name: 'sign',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      if (state.currentStep > state.maxStep) return
      state.currentStep += 1
    },
    decrement: (state) => {
      if (state.currentStep < 0) return
      state.currentStep -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      if (state.currentStep > state.maxStep) return
      state.currentStep += action.payload
    },
    setStepIndecatorDon:(state, action:PayloadAction<number>)=>{
      state.stepIndecatorDataArray[action.payload].done = true
    },
    updateStepIndecatorActive:(state)=>{
      state.stepIndecatorDataArray.forEach((item)=>{
        item.active = state.currentStep === item.step
      })
    },
  },
})

//3.導出reducer
export const { increment, 
  decrement, 
  incrementByAmount, 
  setStepIndecatorDon, 
  updateStepIndecatorActive } = signSlice.actions

export default signSlice.reducer