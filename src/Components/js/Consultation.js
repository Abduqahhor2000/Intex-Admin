import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConsultationMadal from "./madals/ConsultationMadal";
import { Triangle  } from  'react-loader-spinner'
import { https } from "../../axios";
import { getConsultations } from "./fetching/getConsultations"
import { addAllConsultations } from "../../redux/consultationReducer"


export default function Consultation () {
    const token = useSelector(state => state.user.user.token)
    const consultations = useSelector(state => state.user.consultation?.consultations)
    const [consulMadal, setConsulMadal] = useState(false)
    const [consulID, setConsulID] = useState("")
    const [reqStatus, setReqStatus] = useState("")
    const dispatch = useDispatch()

    // const getConsultation = async () => {
    //     if(!oneHand){
    //         setIsLoading(true)
    //     }
    //     try{
    //         const {data} = await https({
    //             method: 'get',
    //             url: `/api/consultation`,
    //             headers:{
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         })
    //         setConsuls(data.data)
    //         setIsLoading(false)
    //         setOneHand(true)
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

    const updateConsul = async (item) => {
        setReqStatus(item.consultation_id)
        try{
            await https({
                method: 'put',
                url: `/api/consultation/${item.consultation_id}`,
                headers:{
                    Authorization: `Bearer ${token}`,
                },
            }).then(()=> getConsultations(token, dispatch, addAllConsultations))
        }catch(err){
            console.log(err)
        }
        setReqStatus("")
    }

    useEffect(()=>{
        getConsultations(token, dispatch, addAllConsultations)
    }, [consulMadal])

    if(consultations.length === 0){
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

    return(
        <>
            <table className="w-full border-spacing-y-2 border-separate">
                <thead className="text-xl bg-white text-left ">
                    <tr>
                        <th className="py-5 rounded-l-3xl pl-11">Имя клиента</th>
                        <th className="py-5">Телефон клиента</th>
                        <th className="py-5">Время</th>
                        <th className="py-5 rounded-r-3xl">Действия</th>
                    </tr>  
                </thead>
                <tbody>
                    {
                        consultations.map(item => {
                            return (
                                <tr key={item.consultation_id} className="bg-white text-xl">
                                    <td className="rounded-l-3xl py-5 pl-10">{item.name}</td>
                                    <td className="py-1.5">{item.phone_number}</td>
                                    <td className="py-1.5">{item.time_consultation}</td>
                                    <td className="py-1.5 rounded-r-3xl">
                                        <div className="flex">
                                            {
                                                  reqStatus === item.consultation_id ?
                                                  <span className="p-2 cursor-pointer h-5">
                                                      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                                                  </span> :
                                                  item.status === true ? 
                                                  <span onClick={()=>{updateConsul(item)}} className="p-2 cursor-pointer">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                                          <path d="M9.5 0C7.62108 0 5.78435 0.557165 4.22209 1.60104C2.65982 2.64491 1.44218 4.12861 0.723149 5.86451C0.0041162 7.6004 -0.184015 9.51054 0.182544 11.3534C0.549104 13.1962 1.45389 14.8889 2.78249 16.2175C4.11109 17.5461 5.80383 18.4509 7.64665 18.8175C9.48946 19.184 11.3996 18.9959 13.1355 18.2769C14.8714 17.5578 16.3551 16.3402 17.399 14.7779C18.4428 13.2156 19 11.3789 19 9.5C19 8.25244 18.7543 7.0171 18.2769 5.86451C17.7994 4.71191 17.0997 3.66464 16.2175 2.78249C15.3354 1.90033 14.2881 1.20056 13.1355 0.723144C11.9829 0.245725 10.7476 0 9.5 0ZM13.585 7.2295L9.2435 12.9295C9.155 13.0445 9.04135 13.1376 8.91125 13.2019C8.78116 13.2661 8.63808 13.2996 8.493 13.3C8.3487 13.3008 8.20613 13.2687 8.07609 13.2061C7.94605 13.1436 7.83197 13.0522 7.7425 12.939L5.4245 9.9845C5.34778 9.88594 5.29122 9.77324 5.25805 9.65282C5.22488 9.5324 5.21575 9.40663 5.23119 9.28269C5.24663 9.15875 5.28633 9.03906 5.34802 8.93046C5.40972 8.82186 5.4922 8.72647 5.59075 8.64975C5.7898 8.49479 6.04225 8.42526 6.29256 8.45644C6.4165 8.47188 6.53619 8.51157 6.64479 8.57327C6.75339 8.63496 6.84878 8.71744 6.9255 8.816L8.474 10.792L12.065 6.042C12.1411 5.94219 12.2361 5.85836 12.3446 5.79527C12.4531 5.73219 12.573 5.69109 12.6974 5.67433C12.8218 5.65757 12.9482 5.66547 13.0696 5.69759C13.1909 5.7297 13.3047 5.7854 13.4045 5.8615C13.5043 5.9376 13.5881 6.03261 13.6512 6.14112C13.7143 6.24962 13.7554 6.36948 13.7722 6.49387C13.7889 6.61825 13.781 6.74472 13.7489 6.86605C13.7168 6.98738 13.6611 7.10119 13.585 7.201V7.2295Z" fill="#139D4B"/>
                                                      </svg>
                                                  </span> :
                                                  <span onClick={()=>{updateConsul(item)}} className="p-2 cursor-pointer">
                                                      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                                          <path d="M9.5 0C7.62108 0 5.78435 0.557165 4.22209 1.60104C2.65982 2.64491 1.44218 4.12861 0.723149 5.86451C0.0041162 7.6004 -0.184015 9.51054 0.182544 11.3534C0.549104 13.1962 1.45389 14.8889 2.78249 16.2175C4.11109 17.5461 5.80383 18.4509 7.64665 18.8175C9.48946 19.184 11.3996 18.9959 13.1355 18.2769C14.8714 17.5578 16.3551 16.3402 17.399 14.7779C18.4428 13.2156 19 11.3789 19 9.5C19 8.25244 18.7543 7.0171 18.2769 5.86451C17.7994 4.71191 17.0997 3.66464 16.2175 2.78249C15.3354 1.90033 14.2881 1.20056 13.1355 0.723144C11.9829 0.245725 10.7476 0 9.5 0ZM13.585 7.2295L9.2435 12.9295C9.155 13.0445 9.04135 13.1376 8.91125 13.2019C8.78116 13.2661 8.63808 13.2996 8.493 13.3C8.3487 13.3008 8.20613 13.2687 8.07609 13.2061C7.94605 13.1436 7.83197 13.0522 7.7425 12.939L5.4245 9.9845C5.34778 9.88594 5.29122 9.77324 5.25805 9.65282C5.22488 9.5324 5.21575 9.40663 5.23119 9.28269C5.24663 9.15875 5.28633 9.03906 5.34802 8.93046C5.40972 8.82186 5.4922 8.72647 5.59075 8.64975C5.7898 8.49479 6.04225 8.42526 6.29256 8.45644C6.4165 8.47188 6.53619 8.51157 6.64479 8.57327C6.75339 8.63496 6.84878 8.71744 6.9255 8.816L8.474 10.792L12.065 6.042C12.1411 5.94219 12.2361 5.85836 12.3446 5.79527C12.4531 5.73219 12.573 5.69109 12.6974 5.67433C12.8218 5.65757 12.9482 5.66547 13.0696 5.69759C13.1909 5.7297 13.3047 5.7854 13.4045 5.8615C13.5043 5.9376 13.5881 6.03261 13.6512 6.14112C13.7143 6.24962 13.7554 6.36948 13.7722 6.49387C13.7889 6.61825 13.781 6.74472 13.7489 6.86605C13.7168 6.98738 13.6611 7.10119 13.585 7.201V7.2295Z" fill="#C6C6C6"/>
                                                      </svg>
                                                  </span>
                                            }
                                            <span onClick={()=>{setConsulID(item.consultation_id); setConsulMadal(true)}} className="p-2 ml-2 cursor-pointer">
                                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.00003 0.571289C8.80636 0.571288 9.58185 0.881202 10.1661 1.43693C10.7503 1.99266 11.0986 2.75168 11.139 3.557L11.1429 3.71415H15.0715C15.2717 3.71437 15.4643 3.79105 15.61 3.92853C15.7556 4.066 15.8432 4.25389 15.8549 4.45381C15.8667 4.65373 15.8016 4.85059 15.6731 5.00416C15.5446 5.15773 15.3622 5.25642 15.1634 5.28007L15.0715 5.28557H14.4044L13.4772 16.7201C13.4174 17.4579 13.0821 18.1462 12.5379 18.648C11.9937 19.1499 11.2805 19.4285 10.5402 19.4284H5.45981C4.71955 19.4285 4.00639 19.1499 3.46219 18.648C2.91799 18.1462 2.58263 17.4579 2.52281 16.7201L1.59488 5.28557H0.928598C0.73615 5.28555 0.550404 5.21489 0.406591 5.08701C0.262778 4.95913 0.1709 4.78291 0.148383 4.59179L0.142883 4.49986C0.142909 4.30741 0.213563 4.12167 0.341445 3.97785C0.469327 3.83404 0.645543 3.74216 0.836669 3.71965L0.928598 3.71415H4.85717C4.85717 2.88061 5.18829 2.08121 5.77769 1.49181C6.36709 0.902411 7.16649 0.571289 8.00003 0.571289ZM6.23217 7.83915C6.08977 7.83915 5.95219 7.89072 5.84487 7.98432C5.73755 8.07792 5.66775 8.20721 5.64838 8.34829L5.64288 8.42843V14.7141L5.64838 14.7943C5.66779 14.9353 5.7376 15.0646 5.84492 15.1581C5.95224 15.2517 6.0898 15.3032 6.23217 15.3032C6.37454 15.3032 6.5121 15.2517 6.61942 15.1581C6.72673 15.0646 6.79655 14.9353 6.81595 14.7943L6.82145 14.7141V8.42843L6.81595 8.34829C6.79659 8.20721 6.72679 8.07792 6.61947 7.98432C6.51215 7.89072 6.37457 7.83915 6.23217 7.83915ZM9.76788 7.83915C9.62548 7.83915 9.4879 7.89072 9.38058 7.98432C9.27326 8.07792 9.20346 8.20721 9.1841 8.34829L9.1786 8.42843V14.7141L9.1841 14.7943C9.2035 14.9353 9.27332 15.0646 9.38063 15.1581C9.48795 15.2517 9.62551 15.3032 9.76788 15.3032C9.91026 15.3032 10.0478 15.2517 10.1551 15.1581C10.2624 15.0646 10.3323 14.9353 10.3517 14.7943L10.3572 14.7141V8.42843L10.3517 8.34829C10.3323 8.20721 10.2625 8.07792 10.1552 7.98432C10.0479 7.89072 9.91028 7.83915 9.76788 7.83915ZM8.00003 2.14272C7.60357 2.14259 7.22172 2.29232 6.93102 2.56189C6.64032 2.83146 6.46226 3.20095 6.43253 3.59629L6.4286 3.71415H9.57146L9.56753 3.59629C9.53779 3.20095 9.35973 2.83146 9.06903 2.56189C8.77833 2.29232 8.39648 2.14259 8.00003 2.14272Z" fill="#FF0202"/>
                                                </svg>
                                            </span>
                                        </div>   
                                    </td>
                                </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
            { consulMadal ?  <ConsultationMadal setConsulMadal={setConsulMadal} consulID={consulID}/> : null}
        </>
    )
}