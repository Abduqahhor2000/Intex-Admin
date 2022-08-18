import { useSelector } from "react-redux"
import { Triangle  } from  'react-loader-spinner'
import { useEffect, useState } from "react"
import ProductItem from "./containers/ProductItem"
import { https } from "../../axios"

export default function ProductsTable({category_id}) {
    const token = useSelector(state => state.user.user.token)
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [oneHand, setOneHand] = useState(false)

    const getProducts = async () => {
        if(!oneHand){
            setIsLoading(true)
        }
        try{
            const data = await https({
                method: 'get',
                url: `/api/product/category/${category_id}`,
                headers:{
                    Authorization: `Bearer ${token}`,
                },
            })
            setProducts(data?.data?.data)
            setIsLoading(false)
            setOneHand(true)
            console.log(data.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    if(isLoading){
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
            <table className="w-full">
                <thead className="text-xl bg-white text-left ">
                    <th className="py-5 rounded-l-3xl pl-11">Изображение</th>
                    <th className="py-5">Цена(сум)</th>
                    <th className="py-5">Количество</th>
                    <th className="py-5">Рамка</th>
                    <th className="py-5">Размер(м)</th>
                    <th className="py-5">Глубина(см)</th>
                    <th className="py-5 rounded-r-3xl">Действия</th>
                </thead>
                <div className="mt-5"></div>
                <tbody>
                    {
                        products.map(item => {
                            return (
                                <>
                                    <ProductItem item={item}/>
                                    <div className="mt-2"></div>
                                </>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </div>
    )
}