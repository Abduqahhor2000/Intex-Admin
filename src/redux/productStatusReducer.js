import { createSlice } from '@reduxjs/toolkit'

export const productStatusSlice = createSlice({
  name: 'productStatus',
  initialState: {
    productStatus: [],
  },
  reducers: {
    addProductStatus: (state, action) => { 
      state.productStatus = action.payload
    },
    delProductStatus: (state) => {
      state.productStatus = []
    },
  },
})

export const { addProductStatus, delProductStatus } = productStatusSlice.actions

export default productStatusSlice.reducer