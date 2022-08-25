import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConsultationMadal from "./madals/ConsultationMadal";
import { Triangle  } from  'react-loader-spinner'
import { getConsultations } from "./fetching/getConsultations"
import { addAllConsultations } from "../../redux/consultationReducer"
import ConsultationItem from "./containers/ConsultationItem";


export default function Consultation () {
    const token = useSelector(state => state.user.user.token)
    const consultations = useSelector(state => state.user.consultation?.consultations)
    const [consulID, setConsulID] = useState("")
    const dispatch = useDispatch()

    

    useEffect(()=>{
        getConsultations(token, dispatch, addAllConsultations)
    }, [])

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
                                <ConsultationItem key={item.consultation_id} item={item} setConsulID={setConsulID} />
                            )
                        })
                    }
                    
                </tbody>
            </table>
            { consulID ?  <ConsultationMadal consulID={consulID} setConsulID={setConsulID}/> : null}
        </>
    )
}