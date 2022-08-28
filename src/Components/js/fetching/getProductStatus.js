import { https } from "../../../axios"
import{removeUser} from "../../../redux/userReducer"

export async function getProductStatus (token, dispatch, addProductStatus, navigate) {
    if(!token) return;
    try{
        const {data} = await https({
            method: "get",
            url: "api/product/status/info",
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })

        dispatch(addProductStatus(data?.data))
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