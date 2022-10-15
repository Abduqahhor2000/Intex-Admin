import React from "react"
import { render, screen } from "@testing-library/react"
import * as reduxHooks from "react-redux"
import Category from "../Category"
import ProductsItem from "../containers/ProductItem"
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

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

describe("Category", ()=>{
    const user = userEvent.setup() 

    it("should find text", async ()=>{
        mocked_useSelector.mockReturnValue(categories)
        render(<Category />)
        
        expect(screen.getByTestId("category_item_3")).toBeInTheDocument()
        expect(screen.queryByTestId("category_edit_modal")).not.toBeInTheDocument()
        
        await user.click(screen.getByTestId("category_edit_3"))
        expect(screen.getByTestId("category_modal")).toBeInTheDocument()

        await user.click(screen.getByTestId("exit_category_modal"))
        expect(screen.queryByTestId("category_edit_modal")).not.toBeInTheDocument()

        await user.click(screen.getByTestId("category_edit_3"))
        expect(screen.getByTestId("category_modal")).toBeInTheDocument()

        await user.click(screen.getByTestId("exit_category_modal"))
        expect(screen.queryByTestId("category_edit_modal")).not.toBeInTheDocument()
        
        await user.click(screen.getByTestId("add_category"))
        expect(screen.getByTestId("category_modal")).toBeInTheDocument()
    })
})