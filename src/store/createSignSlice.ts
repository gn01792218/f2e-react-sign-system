//先引入相關依賴
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//1.定義state
interface State { // 定義 a type for the slice state
  BGImg:string,
  handMadeSignImg:string,
  handSignArray:string[],
  showHandSignModal:boolean,
}
const initialState: State = { // 定義 the initial state using that type
  BGImg:'',
  handMadeSignImg:'',
  handSignArray:[],
  showHandSignModal:false
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
    pushHandsignImg:(state,action:PayloadAction<string>) => {
      if(state.handSignArray.length > 5) return alert('最多只能儲存3張簽名唷')
      state.handSignArray.push(action.payload)
    },
    setShowHandSignModal:(state, action:PayloadAction<boolean>) => {
      state.showHandSignModal = action.payload
    }
  },
})

//3.導出reducer
export const { 
  loadBGImg, 
  loadHandMadeSignImg,
  pushHandsignImg, 
  setShowHandSignModal,
} = createSignSlice.actions

export default createSignSlice.reducer