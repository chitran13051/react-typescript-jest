import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogged: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLogged = true
    },
    logOut: (state) => {
      state.isLogged = false
    },
  }
})

export const { logIn, logOut } = userSlice.actions
export default userSlice.reducer