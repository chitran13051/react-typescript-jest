import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterRTKSlice'
import userReducer from './userRTKSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  }
})

