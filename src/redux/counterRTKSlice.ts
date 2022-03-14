import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++
    },
    decrement: (state) => {
      state.value--
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { decrement, increment, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer