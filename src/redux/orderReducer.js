import { createSlice } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
  },
  reducers: {
    addAllOrders: (state, action) => { 
      state.orders = action.payload
    },
    updateOrder : (state, action) => {
      state.orders = state.orders.map((item) => item.order_id === action.payload.order_id ? action.payload : item)
    },
    delOneOrder: (state, action) => {
      state.orders = state.orders.filter((item) => item.order_id === action.payload.order_id ? false : true)
    },
    delAllOrders: (state) => {
      state.orders = []
    },
  },
})

export const { addAllOrders, updateOrder, delAllOrders, delOneOrder } = orderSlice.actions

export default orderSlice.reducer