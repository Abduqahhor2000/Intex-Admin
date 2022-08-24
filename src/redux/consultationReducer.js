import { createSlice } from '@reduxjs/toolkit'

export const consultationSlice = createSlice({
  name: 'consultation',
  initialState: {
    consultations: [],
  },
  reducers: {
    addAllConsultations: (state, action) => { 
      state.consultations = action.payload
    },
    updateConsultation : (state, action) => {
      state.consultations = state.consultations.map((item) => item.consultation_id === action.payload.consultation_id ? action.payload : item)
    },
    delOneConsultation: (state, action) => {
      state.consultations = state.consultations.filter((item) => item.consultation_id === action.payload.consultation_id ? false : true)
    },
    delAllConsultations: (state) => {
      state.consultations = []
    },
  },
})

export const { addAllConsultations, updateConsultation, delAllConsultations, delOneConsultation } = consultationSlice.actions

export default consultationSlice.reducer