import reducer, { addProductStatus, delProductStatus } from "../productStatusReducer"

describe("testing SiteInfo Reducer...", () => {
    const initialState = {
        productStatus: [],
    }

    const newStatus = [
        {
            "id": 1,
            "name_ru": "Рекомендовано",
            "name_uz": "Tavsiya etiladi"
        },
        {
            "id": 2,
            "name_ru": "Скидка",
            "name_uz": "Chegirmada"
        },
        {
            "id": 3,
            "name_ru": "Нет в продаже",
            "name_uz": "Sotuvda yo'q"
        },
        {
            "id": 4,
            "name_ru": "",
            "name_uz": ""
        }
    ]

    const changedState = { 
        productStatus: [
            {
                "id": 1,
                "name_ru": "Рекомендовано",
                "name_uz": "Tavsiya etiladi"
            }
        ]
    }

    it("initialState was tested", ()=>{
        expect(reducer(undefined, {type: undefined})).toEqual(initialState)
    })

    it("addProductStatus action was tested", ()=>{
        expect(reducer(initialState, addProductStatus(newStatus))).toEqual({productStatus: newStatus})
        expect(reducer(changedState, addProductStatus(newStatus))).toEqual({productStatus: newStatus})
    })
    
    it("delProductStatus action was tested", ()=>{
        expect(reducer(initialState, delProductStatus())).toEqual({productStatus: []})
        expect(reducer(changedState, delProductStatus())).toEqual({productStatus: []})
    })
})