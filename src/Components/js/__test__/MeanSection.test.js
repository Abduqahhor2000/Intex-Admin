import { render, screen } from "@testing-library/react"
import * as reduxHooks from "react-redux"
import MeanSection from "../MeanSection"
import * as reactRouterDom from "react-router-dom"
import {BrowserRouter} from 'react-router-dom'
import '@testing-library/jest-dom'

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
const mocked_useLocation = jest.spyOn(reactRouterDom, "useLocation")

describe("MeanSection", ()=>{
    it("should find text", ()=>{
        mocked_useSelector.mockReturnValue({user: {user_firstname: "Axmad", user_lastname: "Shermatov"}})
        // mocked_useSelector.mockReturnValue("sfhdfgjsdhfsdjhfvjsdfhjdsfvjhsdvfjhdsvhjfvsdhjv")
        mocked_useLocation.mockReturnValue({pathname: "/login"})

        render(<MeanSection />, {wrapper: BrowserRouter})
        const textElement = screen.getByText("INTEX-SHOP.UZ")
        expect(textElement).toBeInTheDocument()
    })
}) 