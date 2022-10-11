import reducer, { addAllProducts, addOneProduct, updateProduct, delOneProduct, delAllProducts } from "../productReducer"

describe("testing Product Reducer...", () => {
    const initialState = {
        products: [],
    }

    const oneProduct = {
        "id": "62",
        "category_id": 2,
        "category_name_uz": "Каркасный бассейн",
        "category_name_ru": "Ramkali basseynlar",
        "image": "https://market-index.herokuapp.com/images/7ff2580a-8c30-47d5-8061-2fe9658c3c0e.jpg",
        "price": "1600000",
        "sale_price": "1200000",
        "quantity": "4",
        "frame_ru": "Металлический каркас",
        "frame_uz": "Metall tanali",
        "size": "3.66",
        "depth": "76.00",
        "equipment_ru": "                                                                                                                                                      ",
        "equipment_uz": "",
        "status_id": 1,
        "status_ru": "Рекомендовано",
        "status_uz": "Tavsiya etiladi"
    }

    const newProduct = { 
        "id": "62",
        "category_id": 2,
        "category_name_uz": "Каркасный бассейн",
        "category_name_ru": "Ramkali basseynlar",
        "image": "https://market-index.herokuapp.com/images/7ff2580a-8c30-47d5-8061-2fe9658c3c0e.jpg",
        "price": "1600000",
        "sale_price": "1200000",
        "quantity": "4",
        "frame_ru": "Металлический каркас",
        "frame_uz": "Metall tanali",
        "size": "3.66",
        "depth": "76.00",
        "equipment_ru": "                                                                                                                                                      ",
        "equipment_uz": "",
        "status_id": 1,
        "status_ru": "Рекомендовано",
        "status_uz": "Tavsiya etiladi"  
    }

    const responsAPI = [  
        {
            "id": "62",
            "category_id": 2,
            "category_name_uz": "Каркасный бассейн",
            "category_name_ru": "Ramkali basseynlar",
            "image": "https://market-index.herokuapp.com/images/7ff2580a-8c30-47d5-8061-2fe9658c3c0e.jpg",
            "price": "1600000",
            "sale_price": "1200000",
            "quantity": "4",
            "frame_ru": "Металлический каркас",
            "frame_uz": "Metall tanali",
            "size": "3.66",
            "depth": "76.00",
            "equipment_ru": "                                                                                                                                                      ",
            "equipment_uz": "",
            "status_id": 1,
            "status_ru": "Рекомендовано",
            "status_uz": "Tavsiya etiladi"
        },
        {
            "id": "64",
            "category_id": 2,
            "category_name_uz": "Каркасный бассейн",
            "category_name_ru": "Ramkali basseynlar",
            "image": "https://market-index.herokuapp.com/images/b1c862ca-bd93-4495-b849-f3a69a97088a.jpg",
            "price": "2250000",
            "sale_price": "1800000",
            "quantity": "4",
            "frame_ru": "Прямоугольная рама",
            "frame_uz": "To'rtburchakli ramka",
            "size": "3x2",
            "depth": "75.00",
            "equipment_ru": "                                                                                                                                                      ",
            "equipment_uz": "",
            "status_id": 1,
            "status_ru": "Рекомендовано",
            "status_uz": "Tavsiya etiladi"
        },
        {
            "id": "65",
            "category_id": 2,
            "category_name_uz": "Каркасный бассейн",
            "category_name_ru": "Ramkali basseynlar",
            "image": "https://market-index.herokuapp.com/images/da5ac149-0391-45ab-a7bf-0443a8e58cab.jpg",
            "price": "2500000",
            "sale_price": "2100000",
            "quantity": "2",
            "frame_ru": "Прямоугольная рама",
            "frame_uz": "To'rtburchakli ramka",
            "size": "4.5x2.2",
            "depth": "84.00",
            "equipment_ru": "                                                                                                                                                      ",
            "equipment_uz": "",
            "status_id": 1,
            "status_ru": "Рекомендовано",
            "status_uz": "Tavsiya etiladi"
        }
    ] 

    const changedState = {products: [ oneProduct ]}


    it("initialState was tested", ()=>{
        expect(reducer(undefined, {type: undefined})).toEqual(initialState)
    })

    it("addAllProducts action was tested", ()=>{
        expect(reducer(initialState, addAllProducts(responsAPI))).toEqual({products: responsAPI})
        expect(reducer(changedState, addAllProducts(responsAPI))).toEqual({products: responsAPI})
    })

    it("addOneProduct action was tested", ()=>{
        expect(reducer(initialState, addOneProduct(oneProduct))).toEqual({products: [oneProduct]})
        expect(reducer(changedState, addOneProduct(oneProduct))).toEqual({products: [oneProduct, ...changedState.products]})
    })
    
    it("updateProduct action was tested", ()=>{
        expect(reducer(initialState, updateProduct(newProduct))).toEqual({products: []})
        expect(reducer(changedState, updateProduct(newProduct))).toEqual({products: [newProduct]})
    })

    it("delOneProduct action was tested", ()=>{
        expect(reducer(initialState, delOneProduct(newProduct))).toEqual({products: []})
        expect(reducer(changedState, delOneProduct(newProduct))).toEqual({products: []})
    })

    it("delAllProducts action was tested", ()=>{
        expect(reducer(initialState, delAllProducts())).toEqual({products: []})
        expect(reducer(changedState, delAllProducts())).toEqual({products: []})
    })
})