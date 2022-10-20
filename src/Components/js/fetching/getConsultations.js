import { https } from "../../../axios"
import{removeUser} from "../../../redux/userReducer"

export async function getConsultations (token, dispatch, addAllConsultations, navigate) {
    if(!token) return;
    try{
        const {data} = await https({
            method: 'get',
            url: `/api/consultation`,
            headers:{
                Authorization: `Bearer ${token}`,
            },
        })
        dispatch(addAllConsultations(data?.data.reverse()))
        return(data?.data)
    }catch(err){
        // console.log(err)
        if(err.response.status === 401){
            dispatch(removeUser()); 
            navigate("/login")
        }
        if(err.response.status === 0){
            navigate("/noconnect")
        }
        return(err)
    }
}