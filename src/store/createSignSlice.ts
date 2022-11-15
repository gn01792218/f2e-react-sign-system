//先引入相關依賴
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//1.定義state
interface State { // 定義 a type for the slice state
  BGImg:string,
  handMadeSignImg:string
}
const initialState: State = { // 定義 the initial state using that type
  BGImg:'',
  handMadeSignImg:'',
}

//2.撰寫reducer函式
export const createSignSlice = createSlice({
  name: 'createSign',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loadBGImg: (state, action:PayloadAction<string>) => {
      state.BGImg = action.payload
    },
    loadHandMadeSignImg: (state, action:PayloadAction<string>) => {
      state.handMadeSignImg = action.payload
    },
  },
})

//3.導出reducer
export const { 
  loadBGImg, 
  loadHandMadeSignImg 
} = createSignSlice.actions

export default createSignSlice.reducer