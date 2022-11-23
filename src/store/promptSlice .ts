//先引入相關依賴
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PromptObj } from '../types/gloable'

//1.定義state
interface State { // 定義 a type for the slice state
  promptObj:PromptObj,
}
const initialState: State = { // 定義 the initial state using that type
  promptObj:{
    title: '提示訊息',
    message: '執行此操作，將造成無法恢復的結果，確定執行嗎?',
    show: false,
    promptValue:0,
    confirmCallback:()=>{}
  },
}

//2.撰寫reducer函式
export const slice = createSlice({
  name: 'msgBox',
  initialState,
  reducers: {
    setPrompt: (state, action:PayloadAction<PromptObj>) =>{
      state.promptObj = action.payload
      console.log('設置Prompt物件的確認callback為 : ',state.promptObj.confirmCallback)
    },
    setPromptShow: (state,action:PayloadAction<boolean>) => {
      state.promptObj.show = action.payload
    },
    setPromptValue: (state,action:PayloadAction<string | number>) => {
      state.promptObj.promptValue = action.payload
      console.log('Redux設置數值',state.promptObj.promptValue)
    },
  },
})

//3.導出reducer
export const {
  setPrompt,
  setPromptShow,
  setPromptValue,
} = slice.actions

export default slice.reducer