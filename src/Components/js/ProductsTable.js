import { useSelector, useDispatch } from "react-redux"
import { Triangle  } from  'react-loader-spinner'
import { useEffect } from "react"
import ProductItem from "./containers/ProductItem"
import { https } from "../../axios"
import { addAllProducts } from "../../redux/productReducer";
import { useNavigate } from "react-router-dom"
import{removeUser} from "../../redux/userReducer"

export default function ProductsTable({category_id, oneHand}) {
    const token = useSelector(state => state.user.user.token)
    const products = useSelector(state => state.user.product.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getProducts = async () => {
        try{
            const {data} = await https({
                method: 'get',
                url: `/api/product`,
                headers:{
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            dispatch(addAllProducts(data.data))
        }catch(err){
            console.log(err)
            if(err.response.status === 401){
                dispatch(removeUser());
                navigate("/login")
            }
            if(err.response.status === 0){
                navigate("/noconnect")
            }
        }
    }

    useEffect(() => {
        getProducts()
    }, [oneHand])

    if(!products.length){
        return(
            <div style={{"width": "300px"}} className="mx-auto mt-40" >
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

    return (
        <div>
            <table className="w-full border-spacing-y-2 border-separate">
                <thead className="text-xl bg-white text-left">
                    <tr>
                        <td className="py-5 rounded-l-3xl pl-11">Изображение</td>
                        <td className="py-5">Цена(сум)</td>
                        <td className="py-5">Количество</td>
                        <td className="py-5">Рамка</td>
                        <td className="py-5">Размер(м)</td>
                        <td className="py-5">Глубина(см)</td>
                        <td className="py-5 rounded-r-3xl">Действия</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(item => {
                            if(item.category_id !== category_id){
                                return null;
                            }
                            return (
                                <ProductItem key={item.id} item={item}></ProductItem>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    )
}