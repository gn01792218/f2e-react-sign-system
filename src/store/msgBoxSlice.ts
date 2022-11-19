//先引入相關依賴
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Status, MsgBoxObj } from '../types/gloable'

//1.定義state
interface State { // 定義 a type for the slice state
  msgBoxObj:MsgBoxObj
}
const initialState: State = { // 定義 the initial state using that type
  msgBoxObj:{
    type: Status.SUCCESS,
    title: '提示訊息',
    message: '尚未提供訊息',
    show: false,
    duration:2000,
  },
}

//2.撰寫reducer函式
export const slice = createSlice({
  name: 'msgBox',
  initialState,
  reducers: {
    setMsgBox: (state, action:PayloadAction<MsgBoxObj>) =>{
      state.msgBoxObj = action.payload
      console.log('設置',state.msgBoxObj)
    },
    setMsgBoxShow: (state,action:PayloadAction<boolean>) => {
      state.msgBoxObj.show = action.payload
    },
  },
})

//3.導出reducer
export const {
  setMsgBox,
  setMsgBoxShow,
} = slice.actions

export default slice.reducer