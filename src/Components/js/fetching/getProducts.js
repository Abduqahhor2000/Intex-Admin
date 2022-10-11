import { https } from "../../../axios"
import{removeUser} from "../../../redux/userReducer"

export async function getProducts (token, dispatch, addAllProducts, navigate) {
    if(!token) return;
    try{
        const {data} = await https({
            method: 'get',
            url: `/api/product`,
            headers:{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        dispatch(addAllProducts(data?.data.reverse()))
        return(data?.data)
    }catch(err){
        console.log(err)
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