import { https } from "../../../axios"

export async function getProducts (token, dispatch, addAllProducts) {
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
        dispatch(addAllProducts(data?.data))
    }catch(err){
        console.log(err)
    }
}