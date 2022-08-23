import { useSelector, useDispatch } from "react-redux"
import { Triangle  } from  'react-loader-spinner'
import { useEffect, useState } from "react"
import ProductItem from "./containers/ProductItem"
import { https } from "../../axios"
import { addAllProducts } from "../../redux/productReducer";

export default function ProductsTable({category_id}) {
    const token = useSelector(state => state.user.user.token)
    const products = useSelector(state => state.user.product.products)
    const [oneMadal, setOnaMadal] = useState(false)
    const dispatch = useDispatch()

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
        }
    }

    useEffect(() => {
        getProducts()
    }, [oneMadal])

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
                        <th className="py-5 rounded-l-3xl pl-11">Изображение</th>
                        <th className="py-5">Цена(сум)</th>
                        <th className="py-5">Количество</th>
                        <th className="py-5">Рамка</th>
                        <th className="py-5">Размер(м)</th>
                        <th className="py-5">Глубина(см)</th>
                        <th className="py-5 rounded-r-3xl">Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(item => {
                            if(item.category_id !== category_id){
                                return null;
                            }
                            return (
                                <ProductItem key={item.id} item={item} oneMadal={oneMadal} setOneMadal={setOnaMadal}></ProductItem>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    )
}