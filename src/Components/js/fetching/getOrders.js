import { https } from "../../../axios"

export async function getOrders (token, dispatch, addAllOrders) {
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
    }
}