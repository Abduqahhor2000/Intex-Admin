import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { Triangle  } from  'react-loader-spinner'
import "../scss/productMadal.scss"
import { getOrders } from "./fetching/getOrders"
import { addAllOrders } from "../../redux/orderReducer"
import { scrollOf } from "./function/scrollOf"
import SaleItem from "./containers/SaleItem"
import SalesMadal from "./madals/SalesMadal"
import { useNavigate } from "react-router-dom"
 
export default function Sales () {
    const token = useSelector(state => state.user.user.token)
    const orders = useSelector(state => state.user.order.orders)
    const [saleID, setSaleID] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        getOrders(token, dispatch, addAllOrders, navigate)
        scrollOf(saleID)
      }, [saleID])

    if(orders.length === 0){
        return(
            <div className="mx-auto w-80 mt-40" >
                <Triangle 
                    height = "300"
                    width = "300"
                    radius = "9"
                    color = '#009398'
                    ariaLabel = 'three-dots-loading'     
                    wrapperStyle
                    wrapperClass
                />
            </div>
        )
    }

    return(
        <div className="w-full overflow-x-auto px-10">
            <table className="border-spacing-y-2 border-separate w-full">
                <thead className="text-xl bg-white text-left w-full">
                    <tr>
                        <td className="py-5 pr-3 min-w-pradaja rounded-l-3xl pl-11">Имя клиента</td>
                        <td className="py-5 px-3 min-w-pradaja">Телефон</td>
                        <td className="py-5 min-w-razmer">Изображение</td>
                        <td className="py-5 min-w-razmer px-3">Размер(м)/ <br/>Глубина(см)</td>
                        <td className="py-5 px-3 min-w-sena">Цена(сум)</td>
                        <td className="py-5 min-w-pradaja">Адрес</td>
                        <td className="py-5 min-w-[11rem] px-3">Время</td>
                        <td className="py-5 w-36 rounded-r-3xl pr-5">Действия</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(item => {
                            return (
                               <SaleItem key={item.order_id} item={item} setSaleID={setSaleID} />
                            )
                        })
                    }
                    
                </tbody>
            </table>
            {   
                saleID ? <SalesMadal saleID={saleID} setSaleID={setSaleID}/> : null
            }
        </div>
    )
}