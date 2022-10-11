import { useState } from "react";
import SiteSectionMadal from "./madals/SiteSectionMadal"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Triangle  } from  'react-loader-spinner'
import { scrollOf } from "./function/scrollOf"
import { getSiteInfo } from "./fetching/getSiteInfo"
import { addAllSiteInfo } from "../../redux/siteInfoReducer"
import { useNavigate } from "react-router-dom"

export default function Orders() {
    const token = useSelector(state => state.user.user.token)
    const [typeMadal, setTypeMadal] = useState(null);
    const [typeInfo, setTypeInfo] = useState({})
    const siteInfo = useSelector(state => state.user.siteInfo.siteInfo)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        getSiteInfo(token, dispatch, addAllSiteInfo, navigate)
        scrollOf(typeMadal)
    }, [typeMadal])

    // if(!siteInfo.phone_number){
    //     return(
    //         <div className="mx-auto w-80 mt-40" >
    //             <Triangle 
    //                 height = "300"
    //                 width = "300"
    //                 radius = "9"
    //                 color = '#009398'
    //                 ariaLabel = 'three-dots-loading'     
    //                 wrapperStyle
    //                 wrapperClass
    //             />
    //         </div>
    //     )
    // }

    return(
        <>
            <div className="px-10 pt-16">
                <table  className="w-full text-xl border-spacing-y-4 border-separate">
                    <thead></thead>
                    <tbody>
                    <tr className="bg-white">
                        <td className="py-1.5 w-72 pl-12 rounded-l-3xl">Телефонный номер</td>
                        <td className="py-1.5 pr-10">{siteInfo.phone_number}</td>
                        <td className="py-1.5"></td>
                        <td className="py-1.5 mr-6 rounded-r-3xl">
                            <span onClick={()=> {setTypeMadal("phoneNumber"); setTypeInfo({tel: siteInfo.phone_number})}} className="block w-16 h-16 p-6 mx-auto cursor-pointer">
                                <svg className="mx-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.750122 13.8125V17.2499H4.18752L14.3255 7.11191L10.8881 3.67234L0.750122 13.8125ZM16.9847 4.45268C17.0697 4.36793 17.1372 4.26722 17.1832 4.15635C17.2292 4.04547 17.2529 3.9266 17.2529 3.80655C17.2529 3.6865 17.2292 3.56763 17.1832 3.45675C17.1372 3.34588 17.0697 3.24517 16.9847 3.16041L14.8396 1.01529C14.7548 0.930268 14.6541 0.862814 14.5432 0.816788C14.4323 0.770762 14.3135 0.74707 14.1934 0.74707C14.0734 0.74707 13.9545 0.770762 13.8436 0.816788C13.7328 0.862814 13.632 0.930268 13.5473 1.01529L11.8697 2.69827L15.3071 6.13026L16.9847 4.45268Z" fill="#3F8C8E"/>
                                </svg>
                            </span>
                        </td>
                    </tr>
                    <tr className="bg-white">
                        <td className="py-1.5 pl-12 rounded-l-3xl">Адрес</td>
                        <td className="py-1.5 pr-10">{siteInfo.address_uz}</td>
                        <td className="py-1.5">{siteInfo.address_ru}</td>
                        <td className="py-1.5 mr-6 rounded-r-3xl">
                            <span onClick={()=>{setTypeMadal("address"); setTypeInfo({address: siteInfo.address_ru, address_uz: siteInfo.address_uz})}} className="block w-16 h-16 p-6 mx-auto cursor-pointer">
                                <svg className="mx-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.750122 13.8125V17.2499H4.18752L14.3255 7.11191L10.8881 3.67234L0.750122 13.8125ZM16.9847 4.45268C17.0697 4.36793 17.1372 4.26722 17.1832 4.15635C17.2292 4.04547 17.2529 3.9266 17.2529 3.80655C17.2529 3.6865 17.2292 3.56763 17.1832 3.45675C17.1372 3.34588 17.0697 3.24517 16.9847 3.16041L14.8396 1.01529C14.7548 0.930268 14.6541 0.862814 14.5432 0.816788C14.4323 0.770762 14.3135 0.74707 14.1934 0.74707C14.0734 0.74707 13.9545 0.770762 13.8436 0.816788C13.7328 0.862814 13.632 0.930268 13.5473 1.01529L11.8697 2.69827L15.3071 6.13026L16.9847 4.45268Z" fill="#3F8C8E"/>
                                </svg>
                            </span>
                        </td>
                    </tr>
                    <tr className="bg-white">
                        <td className="py-1.5 pl-12 rounded-l-3xl">Рабочее время</td>
                        <td className="py-1.5 pr-10">{siteInfo.work_time_uz}</td>
                        <td className="py-1.5">{siteInfo.work_time_ru}</td>
                        <td className="py-1.5 mr-6 rounded-r-3xl ">
                            <span onClick={()=>{setTypeMadal("workTime"); setTypeInfo({timeWork: siteInfo.work_time_ru, timeWork_uz: siteInfo.work_time_uz})}} className="block w-16 h-16 p-6 mx-auto cursor-pointer">
                                <svg className="mx-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.750122 13.8125V17.2499H4.18752L14.3255 7.11191L10.8881 3.67234L0.750122 13.8125ZM16.9847 4.45268C17.0697 4.36793 17.1372 4.26722 17.1832 4.15635C17.2292 4.04547 17.2529 3.9266 17.2529 3.80655C17.2529 3.6865 17.2292 3.56763 17.1832 3.45675C17.1372 3.34588 17.0697 3.24517 16.9847 3.16041L14.8396 1.01529C14.7548 0.930268 14.6541 0.862814 14.5432 0.816788C14.4323 0.770762 14.3135 0.74707 14.1934 0.74707C14.0734 0.74707 13.9545 0.770762 13.8436 0.816788C13.7328 0.862814 13.632 0.930268 13.5473 1.01529L11.8697 2.69827L15.3071 6.13026L16.9847 4.45268Z" fill="#3F8C8E"/>
                                </svg>
                            </span>
                        </td>
                    </tr>
                    <tr className="bg-white">
                        <td className="py-1.5 pl-12 rounded-l-3xl">Телеграм</td>
                        <td className="py-1.5 pr-10">{siteInfo.telegram_link}</td>
                        <td className="py-1.5"></td>
                        <td className="py-1.5 mr-6 rounded-r-3xl">
                            <span onClick={()=> {setTypeMadal("telegramLink"); setTypeInfo({telegram: siteInfo.telegram_link})}} className="block w-16 h-16 p-6 mx-auto cursor-pointer">
                                <svg className="mx-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.750122 13.8125V17.2499H4.18752L14.3255 7.11191L10.8881 3.67234L0.750122 13.8125ZM16.9847 4.45268C17.0697 4.36793 17.1372 4.26722 17.1832 4.15635C17.2292 4.04547 17.2529 3.9266 17.2529 3.80655C17.2529 3.6865 17.2292 3.56763 17.1832 3.45675C17.1372 3.34588 17.0697 3.24517 16.9847 3.16041L14.8396 1.01529C14.7548 0.930268 14.6541 0.862814 14.5432 0.816788C14.4323 0.770762 14.3135 0.74707 14.1934 0.74707C14.0734 0.74707 13.9545 0.770762 13.8436 0.816788C13.7328 0.862814 13.632 0.930268 13.5473 1.01529L11.8697 2.69827L15.3071 6.13026L16.9847 4.45268Z" fill="#3F8C8E"/>
                                </svg>
                            </span>
                        </td>
                    </tr>
                    <tr className="bg-white">
                        <td className="py-1.5 pl-12 rounded-l-3xl">Инстаграм</td>
                        <td className="py-1.5 pr-10">{siteInfo.instagram_link}</td>
                        <td className="py-1.5"></td>
                        <td className="py-1.5 mr-6 rounded-r-3xl">
                            <span onClick={()=> {setTypeMadal("instagramLink"); setTypeInfo({instagram: siteInfo.instagram_link})}} className="block w-16 h-16 p-6 mx-auto cursor-pointer">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.750122 13.8125V17.2499H4.18752L14.3255 7.11191L10.8881 3.67234L0.750122 13.8125ZM16.9847 4.45268C17.0697 4.36793 17.1372 4.26722 17.1832 4.15635C17.2292 4.04547 17.2529 3.9266 17.2529 3.80655C17.2529 3.6865 17.2292 3.56763 17.1832 3.45675C17.1372 3.34588 17.0697 3.24517 16.9847 3.16041L14.8396 1.01529C14.7548 0.930268 14.6541 0.862814 14.5432 0.816788C14.4323 0.770762 14.3135 0.74707 14.1934 0.74707C14.0734 0.74707 13.9545 0.770762 13.8436 0.816788C13.7328 0.862814 13.632 0.930268 13.5473 1.01529L11.8697 2.69827L15.3071 6.13026L16.9847 4.45268Z" fill="#3F8C8E"/>
                                </svg>
                            </span>
                        </td>
                    </tr>
                    </tbody>
                    
                </table>
            </div>
            {
                typeMadal !== null ? <SiteSectionMadal typeMadal={typeMadal} setTypeMadal={setTypeMadal} typeInfo={typeInfo} setTypeInfo={setTypeInfo}/> : null
            }
        </>
    )
}