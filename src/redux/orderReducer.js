import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
  },
  reducers: {
    addAllOrders: (state, action) => { 
      state.orders = action.payload.data
    },
    updateOrder : (state, action) => {
      state.orders = state.orders.map((item) => item.order_id === action.payload.data.order_id ? action.payload.data : item)
    },
    delAllOrders: (state) => {
      state.orders = []
    },
    delOneOrder: (state, action) => {
      state.orders = state.orders.filter((item) => item.order_id === action.payload.data.order_id ? false : true)
    },
  },
})

export const { addAllOrders, updateOrder, delAllOrders, delOneOrder } = orderSlice.actions

export default orderSlice.reducer