import reducer, { addAllOrders, updateOrder, delAllOrders, delOneOrder } from "../orderReducer"

describe("testing Order Reducer...", () => {
    const initialState = {
        orders: [],
    }

    const oneOrder = {
        "order_id": 570,
        "name": "dgdfer",
        "phone_number": "+998 45 353 45 34",
        "product_id": "73",
        "image": "https://market-index.herokuapp.com/images/e3834fe1-8a37-4a84-a2b7-2f0ee4868d92.jpg",
        "size": "29",
        "depth": "10.00",
        "price": "50000",
        "address": "tretertertertertertretert",
        "time_order": "2022-10-01T11:46:53.771Z",
        "status": false
    }

    const newOrder = 
    { 
        "order_id": 570,
        "name": "Abduqahhor",
        "phone_number": "+998 45 353 45 34",
        "product_id": "73",
        "image": "https://market-index.herokuapp.com/images/e3834fe1-8a37-4a84-a2b7-2f0ee4868d92.jpg",
        "size": "29",
        "depth": "10.00",
        "price": "50000",
        "address": "Chilonzor, Dombirobod mahalla",
        "time_order": "2022-10-01T11:46:53.771Z",
        "status": true,
    }

    const responsAPI = [  
        {
            "order_id": 570,
            "name": "dgdfer",
            "phone_number": "+998 45 353 45 34",
            "product_id": "73",
            "image": "https://market-index.herokuapp.com/images/e3834fe1-8a37-4a84-a2b7-2f0ee4868d92.jpg",
            "size": "29",
            "depth": "10.00",
            "price": "50000",
            "address": "tretertertertertertretert",
            "time_order": "2022-10-01T11:46:53.771Z",
            "status": false
        },
        {
            "order_id": 571,
            "name": "dsdsdsd",
            "phone_number": "12 1212121",
            "product_id": "67",
            "image": "https://market-index.herokuapp.com/images/d7efd692-bf0b-4cff-b979-177557cb2bbf.jpg",
            "size": "3.05",
            "depth": "76.00",
            "price": "1520000",
            "address": "sasdasd",
            "time_order": "2022-10-03T05:24:30.208Z",
            "status": false
        },
        {
            "order_id": 572,
            "name": "12313",
            "phone_number": "12 3123123",
            "product_id": "73",
            "image": "https://market-index.herokuapp.com/images/e3834fe1-8a37-4a84-a2b7-2f0ee4868d92.jpg",
            "size": "29",
            "depth": "10.00",
            "price": "50000",
            "address": "31231231",
            "time_order": "2022-10-03T05:30:19.523Z",
            "status": false
        }
    ] 

    const changedState = {orders: [ oneOrder ]}


    it("initialState was tested", ()=>{
        expect(reducer(undefined, {type: undefined})).toEqual(initialState)
    })

    it("addAllOrders action was tested", ()=>{
        expect(reducer(initialState, addAllOrders(responsAPI))).toEqual({orders: responsAPI})
        expect(reducer(changedState, addAllOrders(responsAPI))).toEqual({orders: responsAPI})
    })
    
    it("updateOrder action was tested", ()=>{
        expect(reducer(initialState, updateOrder(newOrder))).toEqual({orders: []})
        expect(reducer(changedState, updateOrder(newOrder))).toEqual({orders: [newOrder]})
    })

    it("delOneOrder action was tested", ()=>{
        expect(reducer(initialState, delOneOrder(oneOrder))).toEqual({orders: []})
        expect(reducer(changedState, delOneOrder(oneOrder))).toEqual({orders: []})
    })

    it("delAllOrders action was tested", ()=>{
        expect(reducer(initialState, delAllOrders())).toEqual({orders: []})
        expect(reducer(changedState, delAllOrders())).toEqual({orders: []})
    })
})