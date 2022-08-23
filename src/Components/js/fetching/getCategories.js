import { https } from "../../../axios"

export async function getCategories (token, dispatch, addAllCategories) {
    try{
        const {data} = await https.get("/api/category", {
            headers:{
                Authorization: `Bearer ${token}`,
            },
        })
        dispatch(addAllCategories(data.data))
        console.log(data)
    }catch(err){
        console.log(err)
    }
}