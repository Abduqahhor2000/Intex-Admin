import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    token: "",
  },
  reducers: {
    addUser: (state, action) => { 
      state.user = action.payload.data
      state.token = action.payload.token
    },
    removeUser: (state) => {
      state.user = {}
      state.token = ""
    },
  },
})

export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer