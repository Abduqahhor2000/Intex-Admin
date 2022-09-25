import {FcCrystalOscillator} from "react-icons/fc"
import { https } from "../../axios"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import{removeUser} from "../../redux/userReducer"
import { useEffect } from "react";

export default function NoConnectPage() {
    const token = useSelector(state => state.user.user.token)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const checkNetConnection = async () => {
        try {
            await https({
                method: 'get',
                url: `/api/product`,
                headers:{
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }) 
        
        navigate("/")
        }
        catch (e){
            console.log(e)
            if(e.response.status === 401){
                dispatch(removeUser()); 
                navigate("/login")
            }
        }
    }

    useEffect(()=>{
        checkNetConnection()
    }, [])

    return(
        <div className="flex justify-center items-center h-screen">
            <div className=" flex flex-col items-center text-3xl mt-5 mr-5">
                <div className="text-9xl mb-5 rotate-90 text-blue-green"><FcCrystalOscillator/></div>
                <div className="text-5xl font-extrabold mb-10 text-blue-green">No internet connection</div>
                <span onClick={()=> checkNetConnection()} className="w-60 h-16 bg-black text-white text-center py-3.5 cursor-pointer">Try again</span>
            </div>
        </div>
    )
}