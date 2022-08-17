import smilegirl from "../../img/smilegirl.jpg"
import girlvsboy from "../../img/girlvsboy.jpg"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { addUser, removeUser } from "../../redux/userReducer";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Login() {
    const [dateRandom] = useState((new Date().getMilliseconds() % 2) === 0 ? true : false)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    console.log(user)
 
    useEffect(()=>{
        if(user.token){
          navigate("/products")
        }
      }, [user, navigate])

    const getLogin = async () => {
        try{
            const {data} = await axios.post("https://market-index.herokuapp.com/auth/login",
                {
                    "username": userName,
                    "password": password,
                }
            )
            console.log(data, "apidan")
            dispatch(addUser(data))
        }catch(err){
            console.log(err)
            dispatch(removeUser())
        }
    }

    return (
        <>  
            {
                dateRandom ? <div className="w-screen h-screen bg-cover bg-no-repeat bg-center blur-sm" style={{"backgroundImage" : `url(${smilegirl})`}}></div> 
                            :<div className="w-screen h-screen bg-cover bg-no-repeat bg-center blur-sm" style={{"backgroundImage" : `url(${girlvsboy})`}}></div>
            }  
            <div className="absolute flex flex-col items-center w-2/3 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-slate-100 p-12 pt-9 rounded-3xl" style={{"width": "620px"}}> 
                <h1 className="text-5xl text-center font-semibold" style={{"color":"rgb(0, 147, 152)"}}>
                    INTEX-MARKET.UZ
                </h1>
                <p className="text-center font-bolder text-xl text-gray-400 mt-5 mb-9">Введите имя пользователя и пароль, чтобы получить доступ к системе.</p>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} className="w-10/12 h-14 outline-none border-none shadow-lg rounded-2xl pl-4 text-2xl text-center mb-8" placeholder="Имя пользователя" type="text"/>
                <span className="hidden w-10/12 h-8 text-red-500">salom</span>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="w-10/12 h-14 outline-none border-none shadow-lg rounded-2xl pl-4 text-2xl text-center mb-8" placeholder="Пароль" type="text"/>
                <span className="hidden w-10/12 h-8 text-red-500">salom</span>
                <span onClick={()=> {getLogin()}} className="block w-60 h-12 rounded-2xl py-3 text-center text-white font-semibold mt-8 cursor-pointer" style={{"backgroundColor" : "rgb(0, 147, 152)"}}>Войти</span>
            </div>
        </>
    )
}