import { useState } from "react";
import SiteSectionMadal from "./madals/SiteSectionMadal"

const siteInfo = {
    tel: "(998) 99 911 02 04",
    address: "Улица Пахлавона Махмуда, Яшнабадский район, город Ташкент",
    timeWork: "Будние дни: 10:00 - 22:00 Без выходных",
    telegram: "https://www.telegram.com/intex-market_uz",
    instagram: "https://www.instagram.com/intex-market_uz",
}

export default function Orders() {
    const [typeMadal, setTypeMadal] = useState(null);
    const [typeInfo, setTypeInfo] = useState({})
    return(
        <>
            <div className="px-10 pt-16">
                <table  className="w-full text-xl">
                    <tbody>
                        <tr className="bg-white">
                            <td className="py-1.5 pl-12 rounded-l-3xl">Телефонный номер</td>
                            <td className="py-1.5">{siteInfo.tel}</td>
                            <td className="py-1.5 mr-6 rounded-r-3xl">
                                <span onClick={()=> {setTypeMadal("tel"); setTypeInfo({tel: siteInfo.tel})}} className="block w-16 h-16 p-6 mx-auto cursor-pointer">
                                    <svg className="mx-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.750122 13.8125V17.2499H4.18752L14.3255 7.11191L10.8881 3.67234L0.750122 13.8125ZM16.9847 4.45268C17.0697 4.36793 17.1372 4.26722 17.1832 4.15635C17.2292 4.04547 17.2529 3.9266 17.2529 3.80655C17.2529 3.6865 17.2292 3.56763 17.1832 3.45675C17.1372 3.34588 17.0697 3.24517 16.9847 3.16041L14.8396 1.01529C14.7548 0.930268 14.6541 0.862814 14.5432 0.816788C14.4323 0.770762 14.3135 0.74707 14.1934 0.74707C14.0734 0.74707 13.9545 0.770762 13.8436 0.816788C13.7328 0.862814 13.632 0.930268 13.5473 1.01529L11.8697 2.69827L15.3071 6.13026L16.9847 4.45268Z" fill="#3F8C8E"/>
                                    </svg>
                                </span>
                            </td>
                        </tr>
                        <div className="mt-5"></div>
                        <tr className="bg-white">
                            <td className="py-1.5 pl-12 rounded-l-3xl">Адрес</td>
                            <td className="py-1.5">{siteInfo.address}</td>
                            <td className="py-1.5 mr-6 rounded-r-3xl">
                                <span onClick={()=>{setTypeMadal("address"); setTypeInfo({address: siteInfo.address, address_uz: "chumanay"})}} className="block w-16 h-16 p-6 mx-auto cursor-pointer">
                                    <svg className="mx-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.750122 13.8125V17.2499H4.18752L14.3255 7.11191L10.8881 3.67234L0.750122 13.8125ZM16.9847 4.45268C17.0697 4.36793 17.1372 4.26722 17.1832 4.15635C17.2292 4.04547 17.2529 3.9266 17.2529 3.80655C17.2529 3.6865 17.2292 3.56763 17.1832 3.45675C17.1372 3.34588 17.0697 3.24517 16.9847 3.16041L14.8396 1.01529C14.7548 0.930268 14.6541 0.862814 14.5432 0.816788C14.4323 0.770762 14.3135 0.74707 14.1934 0.74707C14.0734 0.74707 13.9545 0.770762 13.8436 0.816788C13.7328 0.862814 13.632 0.930268 13.5473 1.01529L11.8697 2.69827L15.3071 6.13026L16.9847 4.45268Z" fill="#3F8C8E"/>
                                    </svg>
                                </span>
                            </td>
                        </tr>
                        <div className="mt-5"></div>
                        <tr className="bg-white">
                            <td className="py-1.5 pl-12 rounded-l-3xl">Рабочее время</td>
                            <td className="py-1.5">{siteInfo.timeWork}</td>
                            <td className="py-1.5 mr-6 rounded-r-3xl ">
                                <span onClick={()=>{setTypeMadal("timeWork"); setTypeInfo({timeWork: siteInfo.timeWork, timeWork_uz: "liboy vremiya"})}} className="block w-16 h-16 p-6 mx-auto cursor-pointer">
                                    <svg className="mx-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.750122 13.8125V17.2499H4.18752L14.3255 7.11191L10.8881 3.67234L0.750122 13.8125ZM16.9847 4.45268C17.0697 4.36793 17.1372 4.26722 17.1832 4.15635C17.2292 4.04547 17.2529 3.9266 17.2529 3.80655C17.2529 3.6865 17.2292 3.56763 17.1832 3.45675C17.1372 3.34588 17.0697 3.24517 16.9847 3.16041L14.8396 1.01529C14.7548 0.930268 14.6541 0.862814 14.5432 0.816788C14.4323 0.770762 14.3135 0.74707 14.1934 0.74707C14.0734 0.74707 13.9545 0.770762 13.8436 0.816788C13.7328 0.862814 13.632 0.930268 13.5473 1.01529L11.8697 2.69827L15.3071 6.13026L16.9847 4.45268Z" fill="#3F8C8E"/>
                                    </svg>
                                </span>
                            </td>
                        </tr>
                        <div className="mt-5"></div>
                        <tr className="bg-white">
                            <td className="py-1.5 pl-12 rounded-l-3xl">Телеграм</td>
                            <td className="py-1.5">{siteInfo.telegram}</td>
                            <td className="py-1.5 mr-6 rounded-r-3xl">
                                <span onClick={()=> {setTypeMadal("telegram"); setTypeInfo({telegram: siteInfo.telegram})}} className="block w-16 h-16 p-6 mx-auto cursor-pointer">
                                    <svg className="mx-auto" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.750122 13.8125V17.2499H4.18752L14.3255 7.11191L10.8881 3.67234L0.750122 13.8125ZM16.9847 4.45268C17.0697 4.36793 17.1372 4.26722 17.1832 4.15635C17.2292 4.04547 17.2529 3.9266 17.2529 3.80655C17.2529 3.6865 17.2292 3.56763 17.1832 3.45675C17.1372 3.34588 17.0697 3.24517 16.9847 3.16041L14.8396 1.01529C14.7548 0.930268 14.6541 0.862814 14.5432 0.816788C14.4323 0.770762 14.3135 0.74707 14.1934 0.74707C14.0734 0.74707 13.9545 0.770762 13.8436 0.816788C13.7328 0.862814 13.632 0.930268 13.5473 1.01529L11.8697 2.69827L15.3071 6.13026L16.9847 4.45268Z" fill="#3F8C8E"/>
                                    </svg>
                                </span>
                            </td>
                        </tr>
                        <div className="mt-5"></div>
                        <tr className="bg-white">
                            <td className="py-1.5 pl-12 rounded-l-3xl">Инстаграм</td>
                            <td className="py-1.5">{siteInfo.instagram}</td>
                            <td className="py-1.5 mr-6 rounded-r-3xl">
                                <span onClick={()=> {setTypeMadal("instagram"); setTypeInfo({instagram: siteInfo.instagram})}} className="block w-16 h-16 p-6 mx-auto cursor-pointer">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.750122 13.8125V17.2499H4.18752L14.3255 7.11191L10.8881 3.67234L0.750122 13.8125ZM16.9847 4.45268C17.0697 4.36793 17.1372 4.26722 17.1832 4.15635C17.2292 4.04547 17.2529 3.9266 17.2529 3.80655C17.2529 3.6865 17.2292 3.56763 17.1832 3.45675C17.1372 3.34588 17.0697 3.24517 16.9847 3.16041L14.8396 1.01529C14.7548 0.930268 14.6541 0.862814 14.5432 0.816788C14.4323 0.770762 14.3135 0.74707 14.1934 0.74707C14.0734 0.74707 13.9545 0.770762 13.8436 0.816788C13.7328 0.862814 13.632 0.930268 13.5473 1.01529L11.8697 2.69827L15.3071 6.13026L16.9847 4.45268Z" fill="#3F8C8E"/>
                                    </svg>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <SiteSectionMadal typeMadal={typeMadal} setTypeMadal={setTypeMadal} typeInfo={typeInfo} setTypeInfo={setTypeInfo}/>
        </>
    )
}