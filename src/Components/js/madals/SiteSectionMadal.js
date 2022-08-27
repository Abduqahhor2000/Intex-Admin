import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { https } from "../../../axios";
import gr from "../../../img/Gr.png"
import { update_SiteInfo } from "../../../redux/siteInfoReducer"
import { useNavigate } from  "react-router-dom"


const inputIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
                        <path d="M32 13.05V15.95C30.7607 15.95 30.5455 16.4575 30.5455 17.8553V24.3774C30.5455 28.0227 28.4218 28.9536 24.7273 29V26.1C26.7695 26.0536 27.6364 26.3233 27.6364 24.128V17.8974C27.5787 17.1191 27.7262 16.3393 28.064 15.6354C28.384 15.086 28.9029 14.6797 29.5142 14.5C28.9029 14.3203 28.384 13.914 28.064 13.3647C27.7262 12.6607 27.5787 11.8809 27.6364 11.1026V4.87055C27.6364 2.6767 26.7695 2.9464 24.7273 2.9V0C28.4218 0.0464 30.5455 0.9773 30.5455 4.6226V11.1447C30.5455 12.541 30.7607 13.05 32 13.05ZM0 13.05V15.95C1.23927 15.95 1.45455 16.4575 1.45455 17.8553V24.3774C1.45455 28.0227 3.57818 28.9536 7.27273 29V26.1C5.23055 26.0536 4.36364 26.3233 4.36364 24.128V17.8974C4.42126 17.1191 4.27385 16.3393 3.936 15.6354C3.61569 15.0857 3.09616 14.6793 2.48436 14.5C3.09616 14.3207 3.61569 13.9143 3.936 13.3647C4.27385 12.6607 4.42126 11.8809 4.36364 11.1026V4.87055C4.36364 2.6767 5.23055 2.9464 7.27273 2.9V0C3.57818 0.0464 1.45455 0.9773 1.45455 4.6226V11.1447C1.45455 12.541 1.23927 13.05 0 13.05ZM24.7273 10.15H7.27273V18.85H24.7273V10.15ZM10.1818 13.05H21.8182V15.95H10.1818V13.05Z" fill="#545454"/>
                  </svg>

export default function SiteSectionMadal({typeMadal, setTypeMadal, typeInfo}) {
    const navigate = useNavigate()
    const [statusReq, setStatusReq] = useState(null)
    const token = useSelector(state => state.user.user.token)
    const [telefon, setTelefon] = useState(typeInfo.tel)
    const [address_ru, setAddress_ru] = useState(typeInfo.address)
    const [address_uz, setAddress_uz] = useState(typeInfo.address_uz)
    const [work_time_ru, setWork_time_ru] = useState(typeInfo.timeWork)
    const [work_time_uz, setWork_time_uz] = useState(typeInfo.timeWork_uz)
    const [telegram_link, setTelegram_link] = useState(typeInfo.telegram)
    const [instagram_link, setInstagram_link] = useState(typeInfo.instagram)
    const dispatch = useDispatch()

    const completeMadal = <div className="flex flex-col items-center">
                            <img className={`duration-300 w-40`} src={gr} alt=""/> 
                            <h2 className="text-5xl font-bolder mb-10">Спасибо!</h2>
                            <p className="text-2xl font-middle">Ваше исправление было успешно завершено.</p>
                          </div> 

    const updateSiteInfo = async () => {
        try{   
            setStatusReq("active") 
            const {data} = await https({
                method: 'put',
                url: `/api/site/${typeMadal}`,
                headers:{
                    Authorization: `Bearer ${token}`,
                },
                data: (
                    typeMadal === "phoneNumber" ? {"phoneNumber" : telefon} :
                    typeMadal === "address" ? {"addressRu" : address_ru, "addressUz": address_uz } :
                    typeMadal === "workTime" ? {"workTimeRu": work_time_ru, "workTimeUz": work_time_uz} :
                    typeMadal === "telegramLink" ? {"telegramLink": telegram_link} :
                    typeMadal === "instagramLink" ? {"instagramLink": instagram_link} :
                    {}
                )
            })

            dispatch(update_SiteInfo({...data?.data[0]}))
            setStatusReq("complate")
        }catch(err){
            console.log(err)
            if(err.response.status === 401){
                navigate("/login")
            }
        }
    }

    return(
        <>
            <div onClick={()=> setTypeMadal(null)} className="fixed z-10 top-0 left-0 w-screen h-screen" style={{"backgroundColor": "rgba(0, 0, 0, 0.2)", "backdropFilter": "blur(7px)"}}></div>
            <div className="fixed z-10 flex flex-col justify-between items-center w-2/3 h-96 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-slate-100 p-12 pt-6 rounded-3xl">
                <span onClick={() => setTypeMadal(null)} className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <rect width="41.3575" height="3.11651" rx="1.55825" transform="matrix(0.727944 0.685636 -0.727944 0.685636 2.55737 0.508789)" fill="#B9B9B9"/>
                        <rect width="41.3575" height="3.11651" rx="1.55825" transform="matrix(0.727944 -0.685636 0.727944 0.685636 0.00292969 28.5811)" fill="#B9B9B9"/>
                    </svg>
                </span>
                {
                    typeMadal === "phoneNumber" ? 
                    <>{
                        (statusReq !== "complate") ? 
                            <>
                                <h2 className="text-5xl" style={{"color": "#009398"}}>Телефонный номер</h2>
                                <div className="w-96">
                                    <label className="relative text-xl w-full text-gray-500 pb-5">Номер<br/>
                                        <input value={telefon} onChange={(e)=> setTelefon(e.target.value)} className="text-black outline-none w-full h-9 mt-2.5 border-b-2 border-slate-400 px-3" type="tel"/>     
                                        <span className="absolute block right-full bottom-4 mr-2">{inputIcon}</span>  
                                    </label>
                                </div>
                                {
                                    statusReq !== "active" ? <span onClick={()=>{updateSiteInfo()}} className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5" style={{"backgroundColor" : "rgba(0, 147, 152, 1)"}}>Изменить</span>
                                                           : <span className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-3" style={{"backgroundColor": "rgb(0, 147, 152)"}}>
                                                                <svg className="animate-spin -ml-1 mr-3 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                </svg>
                                                             </span>
                                }
                            </> 
                            : completeMadal
                    }</> :
                        
                    typeMadal === "address" ? 
                    <>{
                        (statusReq !== "complate") ? 
                            <>
                                <h2 className="text-5xl" style={{"color": "#009398"}}>Адрес</h2>
                                <div className="w-full flex justify-around">
                                    <label className="relative text-xl w-96 text-gray-500 pb-4">Название<br/>
                                        <input value={address_ru} onChange={(e)=> setAddress_ru(e.target.value)} className="text-black outline-none w-full h-9 mt-2.5 border-b-2 border-slate-400 px-3" type="text"/>     
                                        <span className="absolute block right-full bottom-4 mr-2">{inputIcon}</span>  
                                    </label>
                                    <label className="relative text-xl w-96 text-gray-500 pb-4">На узбекском<br/>
                                        <input value={address_uz} onChange={(e)=> setAddress_uz(e.target.value)} className="text-black outline-none w-full h-9 mt-2.5 border-b-2 border-slate-400 px-3" type="text"/>     
                                        <span className="absolute block right-full bottom-4 mr-2">{inputIcon}</span>  
                                    </label>
                                </div>
                                {
                                    statusReq !== "active" ? <span onClick={()=>{updateSiteInfo()}} className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5" style={{"backgroundColor" : "rgba(0, 147, 152, 1)"}}>Изменить</span>
                                                           : <span className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-3" style={{"backgroundColor": "rgb(0, 147, 152)"}}>
                                                                <svg className="animate-spin -ml-1 mr-3 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                </svg>
                                                             </span>
                                }
                            </> 
                                : completeMadal
                    }</> :

                    typeMadal === "workTime" ? 
                    <>{
                        (statusReq !== "complate") ? 
                            <>
                                <h2 className="text-5xl" style={{"color": "#009398"}}>Рабочее время</h2>
                                <div className="w-full flex justify-around">
                                    <label className="relative text-xl w-96 text-gray-500 pb-4">Название<br/>
                                        <input value={work_time_ru} onChange={(e)=> setWork_time_ru(e.target.value)} className="text-black outline-none w-full h-9 mt-2.5 border-b-2 border-slate-400 px-3" type="text"/>     
                                        <span className="absolute block right-full bottom-4 mr-2">{inputIcon}</span>  
                                    </label>
                                    <label className="relative text-xl w-96 text-gray-500 pb-4">На узбекском<br/>
                                        <input value={work_time_uz} onChange={(e)=> setWork_time_uz(e.target.value)} className="text-black outline-none w-full h-9 mt-2.5 border-b-2 border-slate-400 px-3" type="text"/>     
                                        <span className="absolute block right-full bottom-4 mr-2">{inputIcon}</span>  
                                    </label>
                                </div>
                                {
                                    statusReq !== "active" ? <span onClick={()=>{updateSiteInfo()}} className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5" style={{"backgroundColor" : "rgba(0, 147, 152, 1)"}}>Изменить</span>
                                                           : <span className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-3" style={{"backgroundColor": "rgb(0, 147, 152)"}}>
                                                                <svg className="animate-spin -ml-1 mr-3 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                </svg>
                                                             </span>
                                }
                            </> 
                                : completeMadal
                    }</> :

                    typeMadal === "telegramLink" ? 
                    <>{
                        (statusReq !== "complate") ? 
                            <>
                                <h2 className="text-5xl" style={{"color": "#009398"}}>Телеграм</h2>
                                <div className="w-96">
                                    <label className="relative text-xl w-full text-gray-500 pb-5">Линк<br/>
                                        <input value={telegram_link} onChange={(e)=> setTelegram_link(e.target.value)} className="text-black outline-none w-full h-9 mt-2.5 border-b-2 border-slate-400 px-3" type="link"/>     
                                        <span className="absolute block right-full bottom-4 mr-2">{inputIcon}</span>  
                                    </label>
                                </div>
                                {
                                    statusReq !== "active" ? <span onClick={()=>{updateSiteInfo()}} className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5" style={{"backgroundColor" : "rgba(0, 147, 152, 1)"}}>Изменить</span>
                                                           : <span className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-3" style={{"backgroundColor": "rgb(0, 147, 152)"}}>
                                                                <svg className="animate-spin -ml-1 mr-3 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                </svg>
                                                             </span>
                                }
                            </> 
                                : completeMadal
                    }</> :

                    typeMadal === "instagramLink" ?
                    <>{
                        (statusReq !== "complate") ? 
                            <>
                                <h2 className="text-5xl" style={{"color": "#009398"}}>Инстаграм</h2>
                                <div className="w-96">
                                    <label className="relative text-xl w-full text-gray-500 pb-5">Линк<br/>
                                        <input value={instagram_link} onChange={(e)=> setInstagram_link(e.target.value)} className="text-black outline-none w-full h-9 mt-2.5 border-b-2 border-slate-400 px-3" type="link"/>     
                                        <span className="absolute block right-full bottom-4 mr-2">{inputIcon}</span>  
                                    </label>
                                </div>
                                {
                                    statusReq !== "active" ? <span onClick={()=>{updateSiteInfo()}} className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5" style={{"backgroundColor" : "rgba(0, 147, 152, 1)"}}>Изменить</span>
                                                           : <span className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-3" style={{"backgroundColor": "rgb(0, 147, 152)"}}>
                                                                <svg className="animate-spin -ml-1 mr-3 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                                </svg>
                                                             </span>
                                }
                           </> 
                                : completeMadal
                    }</> : null
                }   
            </div>
        </>
    )
}