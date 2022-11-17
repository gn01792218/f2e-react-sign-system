//先引入相關依賴
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//1.定義state
interface State { // 定義 a type for the slice state
  BGImg:string,
  handMadeSignImg:string,
  handSignArray:string[],
  showHandSignModal:boolean,
  userOwnSignImg:string,
}
const initialState: State = { // 定義 the initial state using that type
  BGImg:'',
  handMadeSignImg:'',
  handSignArray:[],
  showHandSignModal:false,
  userOwnSignImg:'',
}

//2.撰寫reducer函式
export const createSignSlice = createSlice({
  name: 'createSign',
  initialState,
  reducers: {
    loadBGImg: (state, action:PayloadAction<string>) => {
      state.BGImg = action.payload
    },
    loadHandMadeSignImg: (state, action:PayloadAction<string>) => {
      state.handMadeSignImg = action.payload
    },
    pushHandsignImg:(state,action:PayloadAction<string>) => {
      if(state.handSignArray.length > 4) return alert('最多只能儲存5張簽名唷')
      state.handSignArray.push(action.payload)
    },
    setShowHandSignModal:(state, action:PayloadAction<boolean>) => {
      state.showHandSignModal = action.payload
    },
    setUserSelectSigImg: (state, action:PayloadAction<number>) => {
      state.userOwnSignImg = state.handSignArray[action.payload]
    },
    deleteHandSign: (state, action:PayloadAction<number>) => {
      state.handSignArray.splice(action.payload,1)
    },
  },
})

//3.導出reducer
export const { 
  loadBGImg, 
  loadHandMadeSignImg,
  pushHandsignImg, 
  setShowHandSignModal,
  setUserSelectSigImg,
  deleteHandSign,
} = createSignSlice.actions

export default createSignSlice.reducer