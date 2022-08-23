import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
  },
  reducers: {
    addAllCategories: (state, action) => { 
      state.categories = action.payload
    },
    addOneCategory: (state, action) => {
      state.categories = [action.payload, ...state.categories]
    },
    updateCategory : (state, action) => {
      state.categories = state.categories.map((item) => item.category_id === action.payload.category_id ? action.payload: item)
    },
    delAllCategories: (state) => {
      state.categories = []
    },
    delOneCategory: (state, action) => {
      state.categories = state.categories.filter((item) => item.category_id === action.payload.category_id ? false : true)
    },
  },
})

export const { addAllCategories, addOneCategory, updateCategory, delAllCategories, delOneCategory } = categorySlice.actions

export default categorySlice.reducer