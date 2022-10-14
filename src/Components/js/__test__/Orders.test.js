import React from "react"
import { render, screen } from "@testing-library/react"
import * as reduxHooks from "react-redux"
import Orders from "../Orders"
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

const orders = [
    {
        "order_id": 570,
        "name": "dgdfer",
        "phone_number": "+998 45 353 45 34",
        "product_id": "73",
        "image": "https://market-index.herokuapp.com/images/ca17b4c5-cb61-41b5-a6f0-d7139a3fde51.jpg",
        "size": "29",
        "depth": "10.00",
        "price": "50000",
        "address": "tretertertertertertretert",
        "time_order": "2022-10-01T11:46:53.771Z",
        "status": false
    }
    // {
    //     "order_id": 571,
    //     "name": "dsdsdsd",
    //     "phone_number": "12 1212121",
    //     "product_id": "67",
    //     "image": "https://market-index.herokuapp.com/images/ed237d5b-1af0-4847-a7f4-0b7c0f9bf18c.jpg",
    //     "size": "3.05",
    //     "depth": "76.00",
    //     "price": "1520000",
    //     "address": "sasdasd",
    //     "time_order": "2022-10-03T05:24:30.208Z",
    //     "status": false
    // },
    // {
    //     "order_id": 572,
    //     "name": "12313",
    //     "phone_number": "12 3123123",
    //     "product_id": "73",
    //     "image": "https://market-index.herokuapp.com/images/ca17b4c5-cb61-41b5-a6f0-d7139a3fde51.jpg",
    //     "size": "29",
    //     "depth": "10.00",
    //     "price": "50000",
    //     "address": "31231231",
    //     "time_order": "2022-10-03T05:30:19.523Z",
    //     "status": false
    // },
    // {
    //     "order_id": 573,
    //     "name": "22",
    //     "phone_number": "22 2222222",
    //     "product_id": "73",
    //     "image": "https://market-index.herokuapp.com/images/ca17b4c5-cb61-41b5-a6f0-d7139a3fde51.jpg",
    //     "size": "29",
    //     "depth": "10.00",
    //     "price": "50000",
    //     "address": "222",
    //     "time_order": "2022-10-03T05:30:31.223Z",
    //     "status": false
    // }
]
const consultations = [
    {
        "consultation_id": 471,
        "name": "DIlshod",
        "phone_number": "+998 11 111 11 11",
        "time_consultation": "2022-10-01T11:38:39.107Z",
        "status": false
    },
    {
        "consultation_id": 472,
        "name": "DIlshod",
        "phone_number": "+998 11 111 11 11",
        "time_consultation": "2022-10-01T11:38:39.143Z",
        "status": false
    },
    {
        "consultation_id": 473,
        "name": "DIlshod",
        "phone_number": "+998 11 111 11 11",
        "time_consultation": "2022-10-01T11:38:39.185Z",
        "status": false
    }
]

jest.mock("react-redux")
const mocked_useSelector = jest.spyOn(reduxHooks, "useSelector")

jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    
    return {
        __esModule: true,
        ...originalModule,
        useNavigate: jest.fn(),
        useLocation: jest.fn(),
    };
});

describe("Orders", ()=>{
    const user = userEvent.setup()

    it("should find text", async ()=>{
        mocked_useSelector.mockReturnValue(orders)
       
        render(<Orders />)
        expect(screen.getByText(/Изображение/i)).toBeInTheDocument()
        
        mocked_useSelector.mockReturnValue(consultations) // -----------------------------------

        await user.click(screen.getByText(/Консультации/i))
        expect(screen.getByText(/Телефон клиента/i)).toBeInTheDocument()
    })
    it("should find table items", async () => {
        mocked_useSelector.mockReturnValue(orders)

        render(<Orders />)
        expect(screen.getAllByTestId("sales_item")).toBeTruthy()
        
        await user.click(screen.getByTestId("delet_button"))
        expect(screen.getByTestId("delet_modal")).toBeTruthy()    
    })
}) 