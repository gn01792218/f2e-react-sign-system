//先引入相關依賴
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//1.定義state
interface State { // 定義 a type for the slice state
  isMobel:boolean,
}
const initialState: State = { // 定義 the initial state using that type
  isMobel:false
}

//2.撰寫reducer函式
export const slice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setIsMobel: (state, action:PayloadAction<boolean>) =>{
      console.log('是不是手機',state.isMobel)
      state.isMobel = action.payload
    },
  },
})

//3.導出reducer
export const {
    setIsMobel,
} = slice.actions

export default slice.reducer