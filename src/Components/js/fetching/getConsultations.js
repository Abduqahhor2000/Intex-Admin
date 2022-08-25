import { https } from "../../../axios"

export async function getConsultations (token, dispatch, addAllConsultations) {
    if(!token) return;
    try{
        const {data} = await https({
            method: 'get',
            url: `/api/consultation`,
            headers:{
                Authorization: `Bearer ${token}`,
            },
        })
        dispatch(addAllConsultations(data?.data))
    }catch(err){
        console.log(err)
    }
}