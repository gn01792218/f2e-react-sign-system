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
        title:'合併輸出',
        active:false,
        done:false
    },
]
}

//2.撰寫reducer函式
export const signSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    setCurrentStepIndecator: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload
    },
    setStepIndecatorDon:(state, action:PayloadAction<number>)=>{ //設置第幾個stepIndecator 為完成
      state.stepIndecatorDataArray[action.payload].done = true
      console.log('設置',action.payload,'為',state.stepIndecatorDataArray[action.payload].done )
    },
    updateStepIndecatorActive:(state)=>{
      state.stepIndecatorDataArray.forEach((item)=>{
        item.active = state.currentStep === item.step
      })
    },
  },
})

//3.導出reducer
export const { 
  setCurrentStepIndecator, 
  setStepIndecatorDon, 
  updateStepIndecatorActive 
} = signSlice.actions

export default signSlice.reducer