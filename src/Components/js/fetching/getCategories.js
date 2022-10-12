import { https } from "../../../axios";
import{removeUser} from "../../../redux/userReducer"

export async function getCategories (token, dispatch, addAllCategories, navigate) {
    if(!token) return; 
    try{
        const {data} = await https.get("/api/category", {
            headers:{
                Authorization: `Bearer ${token}`,
            },
        })
        dispatch(addAllCategories(data?.data))
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