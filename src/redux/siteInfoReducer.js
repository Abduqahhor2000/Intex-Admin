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
      state.siteInfo = action.payload
    },
    update_SiteInfo: (state, action) => {
      state.siteInfo = {...state.siteInfo, ...action.payload}
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

export const { addAllSiteInfo, update_SiteInfo, delAllSiteInfo } = siteInfoSlice.actions

export default siteInfoSlice.reducer