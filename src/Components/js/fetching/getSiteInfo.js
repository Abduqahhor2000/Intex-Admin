import { https } from "../../../axios"

export async function getSiteInfo (token, dispatch, addAllSiteInfo) {
    if(!token) return;
    try{
        const {data} = await https({
            method: 'get',
            url: `/api/site/`,
            headers:{
                Authorization: `Bearer ${token}`,
            },
        })
        dispatch(addAllSiteInfo(data?.data[0]))
    }catch(err){
        console.log(err)
    }
}