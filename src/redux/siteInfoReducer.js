import { createSlice } from '@reduxjs/toolkit'

export const siteInfoSlice = createSlice({
  name: 'siteInfo',
  initialState: {
    siteInfo : {
      phone_number: "",
      address_ru: "",
      address_uz: "",
      work_time_ru: "",
      work_time_uz: "",
      telegram_link: "",
      instagram_link: "",
    }
  },
  reducers: {
    addAllSiteInfo: (state, action) => { 
      state.siteInfo = action.payload.data
    },
    update_phone_number: (state, action) => {
      state.siteInfo.phone_number = action.payload?.data
    },
    update_address : (state, action) => {
      state.siteInfo.address_ru = action.payload?.data?.address_ru
      state.siteInfo.address_uz = action.payload?.data?.address_uz
    },
    update_work_time : (state, action) => {
      state.siteInfo.work_time_ru = action.payload?.data?.work_time_ru
      state.siteInfo.work_time_uz = action.payload?.data?.work_time_uz
    },
    update_telegram_link : (state, action) => {
      state.siteInfo.telegram_link = action.payload?.data
    },
    update_instagram_link : (state, action) => {
      state.siteInfo.instagram_link = action.payload?.data
    },
    delAllSiteInfo: (state) => {
      state.siteInfo = {
        phone_number: "",
        address_ru: "",
        address_uz: "",
        work_time_ru: "",
        work_time_uz: "",
        telegram_link: "",
        instagram_link: "",
      }
    },
  },
})

export const { addAllSiteInfo, update_phone_number, update_address, update_work_time, update_telegram_link, update_instagram_link } = siteInfoSlice.actions

export default siteInfoSlice.reducer