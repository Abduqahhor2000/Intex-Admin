import { getCategories } from "./getCategories"
import { getConsultations } from "./getConsultations"
import { getOrders } from "./getOrders"
import { getProducts } from "./getProducts"
import { getProductStatus } from "./getProductStatus"
import { getSiteInfo } from "./getSiteInfo"
import { addAllCategories } from "../../../redux/categoryReducer"
import { addAllConsultations } from "../../../redux/consultationReducer"
import { addAllOrders } from "../../../redux/orderReducer"
import { addAllProducts } from "../../../redux/productReducer"
import { addProductStatus } from "../../../redux/productStatusReducer"
import { addAllSiteInfo } from "../../../redux/siteInfoReducer"
import * as redux from 'react-redux';
import * as reactRouterDom from "react-router-dom"

jest.setTimeout(15000)
jest.mock("react-redux")
jest.mock("react-router-dom")
const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
const useNavigateSpy = jest.spyOn(reactRouterDom, 'useNavigate');

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VyX2ZpcnN0bmFtZSI6IkFsaSIsInVzZXJfbGFzdG5hbWUiOiJTdXInYXRvdiIsInVzZXJuYW1lIjoidGhlYmVrb2ZmIiwicm9sZV9uYW1lIjoic3VwZXItYWRtaW4ifSwiaWF0IjoxNjY1NDYxOTE4LCJleHAiOjE2NjU1NDgzMTh9.0MSEoodZUmWbg-TgRcEpGRHwHeJSDsl5qNtlWnnFjp8"

test("getCategories was tested...", async ()=>{
    // useDispatchSpy.mockReturnValue(mockDispatchFn)
    // const dispatch = mockDispatchFn(useDispatchSpy)
    const data = await getCategories(token, useDispatchSpy, addAllCategories, useNavigateSpy)
    expect(data.length > 0).toEqual(true)
})
test("getConsultations was tested...", async ()=>{
    // useDispatchSpy.mockReturnValue(mockDispatchFn)
    // const dispatch = mockDispatchFn(useDispatchSpy)
    const data = await getConsultations(token, useDispatchSpy, addAllConsultations, useNavigateSpy)
    expect(data.length > 0).toEqual(true)
})
test("getOrders was tested...", async ()=>{
    // useDispatchSpy.mockReturnValue(mockDispatchFn)
    // const dispatch = mockDispatchFn(useDispatchSpy)
    const data = await getOrders(token, useDispatchSpy, addAllOrders, useNavigateSpy)
    expect(data.length > 0).toEqual(true)
})
test("getProducts was tested...", async ()=>{
    // useDispatchSpy.mockReturnValue(mockDispatchFn)
    // const dispatch = mockDispatchFn(useDispatchSpy)
    const data = await getProducts(token, useDispatchSpy, addAllProducts, useNavigateSpy)
    expect(data.length > 0).toEqual(true)
})
test("getProductStatus was tested...", async ()=>{
    // useDispatchSpy.mockReturnValue(mockDispatchFn)
    // const dispatch = mockDispatchFn(useDispatchSpy)
    const data = await getProductStatus(token, useDispatchSpy, addProductStatus, useNavigateSpy)
    expect(data.length > 0).toEqual(true)
})
test("getSiteInfo was tested...", async ()=>{
    // useDispatchSpy.mockReturnValue(mockDispatchFn)
    // const dispatch = mockDispatchFn(useDispatchSpy)
    const data = await getSiteInfo(token, useDispatchSpy, addAllSiteInfo, useNavigateSpy)
    expect(data.length > 0).toEqual(true)
})