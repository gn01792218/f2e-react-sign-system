//先引入相關依賴
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

//1.定義state
interface State { // 定義 a type for the slice state
  bgFileData:string
}
const initialState: State = { // 定義 the initial state using that type
    bgFileData:''
}

//2.撰寫reducer函式
export const createSignSlice = createSlice({
  name: 'createSign',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loadData: (state, action:PayloadAction<string>) => {
      state.bgFileData = action.payload
    },
  },
})

//3.導出reducer
export const { loadData } = createSignSlice.actions

//4.導出state
//Other code such as selectors can use the imported `RootState` type
export const selectBgFileData = (state: RootState) => state

export default createSignSlice.reducer