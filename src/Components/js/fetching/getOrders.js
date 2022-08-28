import { https } from "../../../axios"
import{removeUser} from "../../../redux/userReducer"

export async function getOrders (token, dispatch, addAllOrders, navigate) {
    if(!token) return;
    try{
        const {data} = await https({
            method: 'get',
            url: `/api/order`,
            headers:{
                Authorization: `Bearer ${token}`,
            },
        })
        dispatch(addAllOrders(data?.data))
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