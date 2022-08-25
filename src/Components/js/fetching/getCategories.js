import { https } from "../../../axios"

export async function getCategories (token, dispatch, addAllCategories) {
    if(!token) return; 
    try{
        const {data} = await https.get("/api/category", {
            headers:{
                Authorization: `Bearer ${token}`,
            },
        })
        dispatch(addAllCategories(data?.data))
    }catch(err){
        console.log(err)
    }
}