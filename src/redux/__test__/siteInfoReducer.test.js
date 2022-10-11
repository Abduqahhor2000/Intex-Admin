import reducer, { addAllSiteInfo, update_SiteInfo, delAllSiteInfo } from "../siteInfoReducer"

describe("testing SiteInfo Reducer...", () => {
    const initialState = {
        siteInfo : {
            phone_number: "",
            address_ru: "",
            address_uz: "",
            work_time_ru: "",
            work_time_uz: "",
            telegram_link: "",
            instagram_link: "",
          }
    }

    const newSiteInfo = {
        phone_number: "(998) 94 100 20 10",
    }

    const responsAPI = {
        phone_number: "(998) 94 100 20 10",
        address_ru: "Улица Пахлавона Махмуда, Яшнабадский район, город Ташкент",
        address_uz: "Toshkent shahri, Yashnobod tumani, Paxlavon Mahmud ko‘chasi",
        work_time_ru: "Будние дни: 09:00 - 22:00 Без выходных",
        work_time_uz: "Ish kunlari: 09:00 - 22:00. Haftada etti kun",
        telegram_link: "https://t.me/basseinintexuzb",
        instagram_link: "https://www.instagram.com/intex-market_uz/",
    } 

    const changedState = { 
        siteInfo: {
            phone_number: "(998) 94 100 20 10",
            address_ru: "Улица Пахлавона Махмуда, Яшнабадский район, город Ташкент",
            address_uz: "Toshkent shahri, Yashnobod tumani, Paxlavon Mahmud ko‘chasi",
            work_time_ru: "Будние дни: 09:00 - 22:00 Без выходных",
            work_time_uz: "Ish kunlari: 09:00 - 22:00. Haftada etti kun",
            telegram_link: "https://t.me/basseinintexuzb",
            instagram_link: "https://www.instagram.com/intex-market_uz/",
        }
    }


    it("initialState was tested", ()=>{
        expect(reducer(undefined, {type: undefined})).toEqual(initialState)
    })

    it("addAllSiteInfo action was tested", ()=>{
        expect(reducer(initialState, addAllSiteInfo(responsAPI))).toEqual({siteInfo: responsAPI})
        expect(reducer(changedState, addAllSiteInfo(responsAPI))).toEqual({siteInfo: responsAPI})
    })
    
    it("update_SiteInfo action was tested", ()=>{
        expect(reducer(initialState, update_SiteInfo(newSiteInfo))).toEqual({siteInfo: {...initialState.siteInfo, ...newSiteInfo}})
        expect(reducer(changedState, update_SiteInfo(newSiteInfo))).toEqual({siteInfo: {...changedState.siteInfo, ...newSiteInfo}})
    })

    it("delAllSiteInfo action was tested", ()=>{
        expect(reducer(initialState, delAllSiteInfo())).toEqual(initialState)
        expect(reducer(changedState, delAllSiteInfo())).toEqual(initialState)
    })
})