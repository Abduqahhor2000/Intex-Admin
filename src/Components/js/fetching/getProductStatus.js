import { https } from "../../../axios"

export async function getProductStatus (token, dispatch, addProductStatus) {
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
    }
}