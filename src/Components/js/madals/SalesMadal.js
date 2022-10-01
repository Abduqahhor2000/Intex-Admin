import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { https } from "../../../axios"
import gr from "../../../img/Gr.png"
import { delOneOrder } from "../../../redux/orderReducer"
import { useNavigate } from  "react-router-dom"
import{removeUser} from "../../../redux/userReducer" 

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
                dispatch(removeUser());
                navigate("/login")
            }
            if(err.response.status === 0){
                navigate("/noconnect")
            }
        }
    }
    return (
        <>
            <div onClick={()=>{setSaleID("");}} className="fixed z-10 top-0 left-0 w-screen h-screen bg-black-02 backdrop-blur"></div>
            <div className="fixed z-10 flex flex-col justify-between items-center w-2/3 h-96 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-slate-100 p-12 pt-6 rounded-3xl">
                <span onClick={() =>{setSaleID("");}} className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <rect width="41.3575" height="3.11651" rx="1.55825" transform="matrix(0.727944 0.685636 -0.727944 0.685636 2.55737 0.508789)" fill="#B9B9B9"/>
                        <rect width="41.3575" height="3.11651" rx="1.55825" transform="matrix(0.727944 -0.685636 0.727944 0.685636 0.00292969 28.5811)" fill="#B9B9B9"/>
                    </svg>
                </span>
                {
                    reqStatus !== false ? 
                    <>
                        <h2 className="text-5xl text-blue-green">Действия</h2>
                        <div className="w-full flex justify-center">
                            <span className="text-2xl">Вы уверены, что хотите удалить этот раздел!</span>
                        </div>
                        <div className="flex justify-around w-full">
                            {
                                reqStatus === true ? <span className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-3.5 bg-blue-green">
                                                        <svg className="animate-spin mr-3 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                     </span>
                                                   : <span onClick={()=> {deleteOrder()}} className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5 bg-blue-green">Да</span>
                            }
                            <span onClick={()=>{setSaleID("");}} className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5 bg-red-blue">Нет</span>   
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