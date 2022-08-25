import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { https } from "../../../axios"
import gr from "../../../img/Gr.png"
import { delOneOrder } from "../../../redux/orderReducer"
import { useNavigate } from  "react-router-dom"


export default function SalesMadal({saleID, setSaleID}) {
    const token = useSelector(state => state.user.user.token)
    const [reqStatus, setReqStatus] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const deleteOrder = async () => {
        try{
            setReqStatus(true)
            await https({
                
                method: 'delete',
                url: `/api/order/${saleID}`,
                headers:{
                    Authorization: `Bearer ${token}`,
                },
            })
            dispatch(delOneOrder({
                order_id: saleID
            }))
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
            <div onClick={()=>{setSaleID("");}} className="fixed z-10 top-0 left-0 w-screen h-screen" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)", "backdropFilter": "blur(7px)"}}></div>
            <div className="fixed z-10 flex flex-col justify-between items-center w-2/3 h-96 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-slate-100 p-12 pt-6 rounded-3xl">
                <span onClick={() =>{setSaleID("");}} className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <rect width="41.3575" height="3.11651" rx="1.55825" transform="matrix(0.727944 0.685636 -0.727944 0.685636 2.55737 0.508789)" fill="#B9B9B9"/>
                        <rect width="41.3575" height="3.11651" rx="1.55825" transform="matrix(0.727944 -0.685636 0.727944 0.685636 0.00292969 28.5811)" fill="#B9B9B9"/>
                    </svg>
                </span>
                {
                    reqStatus === null ? 
                    <>
                        <h2 className="text-5xl" style={{"color": "#009398"}}>Действия</h2>
                        <div className="w-full flex justify-center">
                            <span>Siz rostdan ham shu bo'limni o'chirmoqchimisiz!!!</span>
                        </div>
                        <div className="flex justify-around w-full">
                            <span onClick={()=> {deleteOrder()}} className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5" style={{"backgroundColor" : "rgba(0, 147, 152, 1)"}}>Da</span>
                            <span onClick={()=>{setSaleID("");}} className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5" style={{"backgroundColor" : "rgb(152, 0, 147)"}}>Net</span>   
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