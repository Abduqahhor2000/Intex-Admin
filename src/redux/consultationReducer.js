import { createSlice } from '@reduxjs/toolkit'

export const consultationSlice = createSlice({
  name: 'consultation',
  initialState: {
    consultations: [],
  },
  reducers: {
    addAllConsultations: (state, action) => { 
      state.consultations = action.payload.data
    },
    updateConsultation : (state, action) => {
      state.consultations = state.consultations.map((item) => item.consultation_id === action.payload.data.consultation_id ? action.payload.data : item)
    },
    delAllConsultations: (state) => {
      state.consultations = []
    },
    delOneConsultation: (state, action) => {
      state.consultations = state.consultations.filter((item) => item.consultation_id === action.payload.data.consultation_id ? false : true)
    },
  },
})

export const { addAllConsultations, updateConsultation, delAllConsultations, delOneConsultation } = consultationSlice.actions

export default consultationSlice.reducer