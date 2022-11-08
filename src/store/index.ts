import { configureStore } from '@reduxjs/toolkit'
//引入reducer
import sign from './signSlice'  
import createSign from './createSignSlice'

const store = configureStore({
  reducer: {
    sign,
    createSign
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store