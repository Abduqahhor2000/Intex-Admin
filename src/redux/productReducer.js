import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
    addAllProducts: (state, action) => { 
      state.products = action.payload
    },
    addOneProduct: (state, action) => {
      state.products = [action.payload, ...state.products]
    },
    updateProduct : (state, action) => {
      state.products = state.products.map((item) => item.id === action.payload.id ? action.payload : item)
    },
    delOneProduct: (state, action) => {
      state.products = state.products.filter((item) => item.id === action.payload.id ? false : true)
    },
    delAllProducts: (state) => {
      state.products = []
    },
  },
})

export const { addAllProducts, addOneProduct, updateProduct, delOneProduct, delAllProducts } = productSlice.actions

export default productSlice.reducer