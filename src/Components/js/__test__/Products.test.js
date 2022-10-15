import React from "react"
import { render, screen } from "@testing-library/react"
import * as reduxHooks from "react-redux"
import Products from "../Products"
import ProductsItem from "../containers/ProductItem"
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
const categories = [   
    {
        "category_id": 3,
        "name_ru": "Надувной бассейн",
        "name_uz": "Shishiriladigan bass"
    },
    {
        "category_id": 4,
        "name_ru": "Аксессуары",
        "name_uz": "Aksesuarlar"
    }  
]
const products = [
    {
        "id": "62",
        "category_id": 3,
        "category_name_uz": "Надувной бассейн",
        "category_name_ru": "Shishiriladigan bass",
        "image": "https://market-index.herokuapp.com/images/4de3a40b-c702-4dcd-bf16-601dd5923444.jpg",
        "price": "160000",
        "sale_price": "120000",
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
        "category_id": 3,
        "category_name_uz": "Надувной бассейн",
        "category_name_ru": "Shishiriladigan bass",
        "image": "https://market-index.herokuapp.com/images/04b947b4-e107-490c-b00f-4066e354bf97.jpg",
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
        "category_id": 4,
        "category_name_uz": "Аксессуары",
        "category_name_ru": "Aksesuarlar",
        "image": "https://market-index.herokuapp.com/images/d08172ea-be3c-426d-9f11-ba1c2f409bdc.jpg",
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

describe("Products", ()=>{
    const user = userEvent.setup()

    it("should find text", async ()=>{
        mocked_useSelector.mockReturnValue(categories)
       
        render(<Products />)
        expect(screen.getByText(/Добавить продукт/i)).toBeInTheDocument()

        const categoryButton1 = screen.getByTestId("category_3")
        const categoryButton2 = screen.getByTestId("category_4")

        expect(categoryButton1).toBeInTheDocument()
        expect(categoryButton2).toBeInTheDocument()

        expect(screen.getByTestId("categoryTable_3")).toBeInTheDocument()
        expect(screen.queryByTestId("categoryTable_4")).not.toBeInTheDocument()
        
        await user.click(categoryButton2)
        
        expect(screen.queryByTestId("categoryTable_3")).not.toBeInTheDocument()
        expect(screen.getByTestId("categoryTable_4")).toBeInTheDocument()
        
        await user.click(categoryButton1)

        expect(screen.getByTestId("categoryTable_3")).toBeInTheDocument()
        expect(screen.queryByTestId("categoryTable_4")).not.toBeInTheDocument()
    })

    it("should find table items", async () => {
        mocked_useSelector.mockReturnValue(products)

        render(<ProductsItem  item={products[0]}/>)

        const productEdit = screen.getByTestId("product_edit_62")
        await user.click(productEdit)
        expect(screen.getByTestId("thisiseditmodal")).toBeInTheDocument();
        const exit_editmodal = screen.getByTestId("exit_editmodal")
        await user.click(exit_editmodal)
        expect(screen.queryByTestId("thisiseditmodal")).not.toBeInTheDocument();

        const productDel = screen.getByTestId("product_del_62")
        await user.click(productDel)
        expect(screen.getByTestId("thisisdelmodal")).toBeInTheDocument();
        const exit_delmodal = screen.getByTestId("exit_delmodal")
        await user.click(exit_delmodal)
        expect(screen.queryByTestId("thisiseditmodal")).not.toBeInTheDocument();    
    })
}) 