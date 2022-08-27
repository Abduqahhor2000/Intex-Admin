import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { delOneProduct } from "../../../redux/productReducer"
import { https } from "../../../axios"
import gr from "../../../img/Gr.png"
import { useNavigate } from  "react-router-dom"


export default function DelProductMadal({productID, setProductID}) {
    const token = useSelector(state => state.user.user.token)
    const [reqStatus, setReqStatus] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const deleteProduct = async () => {
        try{
            setReqStatus(true)
            await https({
                method: 'delete',
                url: `/api/product/${productID}`,
                headers:{
                    Authorization: `Bearer ${token}`,
                },
            })
            dispatch(delOneProduct({id: productID}))
            setReqStatus(false)
        }catch(err){
            console.log(err)
            if(err.response.status === 401){
                navigate("/login")
            }
        }
    }
    return (
        <>
            <div onClick={()=>{ setProductID("");}} className="fixed z-10 top-0 left-0 w-screen h-screen" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)", "backdropFilter": "blur(7px)"}}></div>
            <div className="fixed z-10 flex flex-col justify-between items-center w-2/3 h-96 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-slate-100 p-12 pt-6 rounded-3xl">
                <span onClick={() =>{ setProductID("");}} className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <rect width="41.3575" height="3.11651" rx="1.55825" transform="matrix(0.727944 0.685636 -0.727944 0.685636 2.55737 0.508789)" fill="#B9B9B9"/>
                        <rect width="41.3575" height="3.11651" rx="1.55825" transform="matrix(0.727944 -0.685636 0.727944 0.685636 0.00292969 28.5811)" fill="#B9B9B9"/>
                    </svg>
                </span>
                {
                    reqStatus !== false ? 
                    <>
                        <h2 className="text-5xl" style={{"color": "#009398"}}>Действия</h2>
                        <div className="w-full flex justify-center">
                            <span className="text-2xl">Вы уверены, что хотите удалить этот раздел!!!</span>
                        </div>
                        <div className="flex justify-around w-full">
                            {
                                reqStatus !== true ? <span onClick={()=> {deleteProduct()}} className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5" style={{"backgroundColor" : "rgba(0, 147, 152, 1)"}}>Да</span>
                                                   : <span className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-3" style={{"backgroundColor" : "rgba(0, 147, 152, 1)"}}>
                                                        <svg className="animate-spin -ml-1 mr-3 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                     </span>
                            }
                            <span onClick={()=>{ setProductID("");}} className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5" style={{"backgroundColor" : "rgb(152, 0, 147)"}}>Нет</span>   
                        </div>
                    </> :
                    <div className="flex flex-col items-center">
                        <img className={`grayscale duration-300 w-40 ${ reqStatus !== true ? "grayscale-0" : ""}`} src={gr} alt=""/> 
                        <h2 className="text-5xl font-bolder mb-10">Спасибо!</h2>
                        <p className="text-2xl font-middle">Удаление прошло успешно.</p>
                    </div>  
                }
                
            </div>
        </>
        
    )
}