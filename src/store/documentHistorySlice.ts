//先引入相關依賴
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DocumentHistoryObj } from "../types/gloable";
//1.定義state
interface State {
  // 定義 a type for the slice state
  documentHistoryArray: DocumentHistoryObj[],
  saveDocument:DocumentHistoryObj | null,
}
const initialState: State = {
  documentHistoryArray: [],
  saveDocument:null,
};

//2.撰寫reducer函式
export const slice = createSlice({
  name: "documentHistory",
  initialState,
  reducers: {
    pushDocument: (state, action: PayloadAction<DocumentHistoryObj>) => {
      state.documentHistoryArray.push(action.payload) 
    },
    deleteDocument: (state, action:PayloadAction<number>) =>{
        state.documentHistoryArray.splice(action.payload,1) 
    },
    setSaveDocument:(state,action:PayloadAction<DocumentHistoryObj>) =>{
      state.saveDocument = action.payload
    }
  },
});

//3.導出reducer
export const { 
    pushDocument,
    deleteDocument,
    setSaveDocument
} = slice.actions;

export default slice.reducer;
