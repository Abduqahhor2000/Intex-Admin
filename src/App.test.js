import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import DefaultApp from './DefaultApp'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import * as reduxHooks from "react-redux"
import {LocationDisplay} from "./Components/js/LocationDisplay"

jest.mock("react-redux")
const mocked_useSelector = jest.spyOn(reduxHooks, "useSelector")

const categories = [
  {
    "category_id": 2,
    "name_ru": "Каркасный бассейн",
    "name_uz": "Ramkali basseynlar"
  },
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
  },
  {
      "order_id": 571,
      "name": "dsdsdsd",
      "phone_number": "12 1212121",
      "product_id": "67",
      "image": "https://market-index.herokuapp.com/images/ed237d5b-1af0-4847-a7f4-0b7c0f9bf18c.jpg",
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
      "image": "https://market-index.herokuapp.com/images/ca17b4c5-cb61-41b5-a6f0-d7139a3fde51.jpg",
      "size": "29",
      "depth": "10.00",
      "price": "50000",
      "address": "31231231",
      "time_order": "2022-10-03T05:30:19.523Z",
      "status": false
  },
  {
      "order_id": 573,
      "name": "22",
      "phone_number": "22 2222222",
      "product_id": "73",
      "image": "https://market-index.herokuapp.com/images/ca17b4c5-cb61-41b5-a6f0-d7139a3fde51.jpg",
      "size": "29",
      "depth": "10.00",
      "price": "50000",
      "address": "222",
      "time_order": "2022-10-03T05:30:31.223Z",
      "status": false
  }
]

test('full app rendering/navigating', async () => {
  // mocked_useSelector.
  mocked_useSelector.mockReturnValue(categories) //---------------------------------------
  const user = userEvent.setup()

  render(<DefaultApp />, {wrapper: BrowserRouter})

  expect(screen.getByText(/INTEX-SHOP.UZ/i)).toBeInTheDocument()

  mocked_useSelector.mockReturnValue(orders) // -------------------------------------------

  await user.click(screen.getByTestId("orders"))
  expect(screen.getByText(/Имя клиента/i)).toBeInTheDocument()

  mocked_useSelector.mockReturnValue(categories) // -------------------------------------------
  
  await user.click(screen.getByTestId("types"))
  expect(screen.getByText(/Добавить категории/i)).toBeInTheDocument()

  await user.click(screen.getByTestId("site"))
  expect(screen.getByText(/Рабочее время/i)).toBeInTheDocument()

  await user.click(screen.getByTestId("products"))
  expect(screen.getByText(/Добавить продукт/i)).toBeInTheDocument()
  
})

test('landing on a bad page', () => {
  const badRoute = '/some/bad/route'

  render(
    <MemoryRouter initialEntries={[badRoute]}>
        <DefaultApp />
    </MemoryRouter>
  )

  expect(screen.getByText(/Page not found/i)).toBeInTheDocument()
})

test('rendering a component that uses useLocation', () => {
  const route = '/some-route'

  render(
    <MemoryRouter initialEntries={[route]}>
      <LocationDisplay />
    </MemoryRouter>
  )

  expect(screen.getByTestId('location-display')).toHaveTextContent(route)
})
test('rendering a component that noconnection', () => {
  const route = '/noconnect'

  render(
    <MemoryRouter initialEntries={[route]}>
      <DefaultApp />
    </MemoryRouter>
  )

  expect(screen.getByText(/No internet connection/i)).toBeInTheDocument()
})