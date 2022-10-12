import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { addUser, removeUser } from "../../redux/userReducer";
import { useState, useEffect } from "react";
import { https } from "../../axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

export default function Login() {
    const [dateRandom] = useState((new Date().getMilliseconds() % 2) === 0 ? true : false)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordOpen, setPasswordOpen] = useState(false);
    const [reqError, setReqError] = useState(false);
    const [resStatus, setResStatus] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(()=>{
        if(user.token){
          navigate("/products")
        }
      }, [user, navigate])

    const getLogin = async () => {
        if(!((userName.length > 3) && (password.length > 3))){
            setReqError(true)
            return
        }

        setIsLoading(true)

        try{
            const {data} = await https.post("/auth/login",
                {
                    "username": userName,
                    "password": password,
                }
            )
            console.log(data)
            dispatch(addUser(data))
        }catch(err){
            if(err.response.status === 404){
                setPassword("")
                setUserName("")
            }
            if(err.response.status === 400){
                setPassword("")
                setUserName("")
            }
            if(err.response.status === 0){
                navigate("/noconnect")
            }
            setResStatus(err.response.status)
            dispatch(removeUser())
        }
        setIsLoading(false)
    } 

    return (
        <>   
            {
                dateRandom ? <div className="w-screen h-screen bg-cover bg-no-repeat bg-center blur-sm bg-smilegirl"></div> 
                            :<div className="w-screen h-screen bg-cover bg-no-repeat bg-center blur-sm bg-girlvsboy"></div>
            }  
            <div className="absolute flex flex-col w-2/3 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-slate-100 p-12 pt-9 rounded-3xl w-155"> 
                <h1 className="text-5xl text-center item-self-center font-semibold text-blue-green">
                    INTEX-SHOP.UZ
                </h1>
                {
                    resStatus === 404 ? <p className="text-center font-bolder text-xl text-red-500 mt-5 mb-16">Имя пользователя или пароль неверны!</p> 
                   :resStatus === 400 ? <p className="text-center font-bolder text-xl text-red-500 mt-5 mb-9">Пожалуйста, не оставляйте пробел между логином и паролем!</p> 
                   :<p className="text-center font-bolder text-xl text-gray-400 mt-5 mb-9">Введите имя пользователя и пароль, чтобы получить доступ к системе.</p>
                }
                <input 
                    value={userName} 
                    maxLength={15} 
                    onChange={(e) =>{ setUserName(e.target.value); setResStatus(false);}} 
                    className={`w-full shadow-login h-14 outline-none border-2 border-solid rounded-2xl pl-4 text-2xl text-center ${reqError && (userName.length < 4) ? "border-rose-600" : "mb-8 border-transparent"}`} 
                    placeholder="Имя пользователя" 
                    type="text"/>
                <span className={`w-10/12 pl-3 h-8 text-red-500 ${reqError && (userName.length < 4) ? "" : "hidden"}`}>Username 4ta belgidan kam bo'lmasligi kerak!</span>
                <div className="relative flex justify-between w-full">
                    <input 
                        value={password} 
                        maxLength={24} 
                        onChange={(e) =>{ setPassword(e.target.value); setResStatus(false);}} 
                        className={`w-full shadow-login h-14 outline-none border-2 border-solid rounded-2xl pl-4 text-2xl text-center ${reqError && (password.length < 4) ? "border-rose-600" : "mb-8 border-transparent"}`} 
                        placeholder="Пароль" 
                        type={passwordOpen ? "text" : "password"}/>
                    <span onClick={() => setPasswordOpen(!passwordOpen)} className="absolute w-14 cursor-pointer right-0 h-14 text-4xl p-2.5 text-gray-300">
                        {
                            passwordOpen ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
                        }
                    </span>
                </div>
                <span className={`w-10/12 pl-3 self-left h-8 text-red-500 ${reqError && (password.length < 4) ? "" : "hidden"}`}>Password 4ta belgidan kam bo'lmasligi kerak!</span>
                {
                    isLoading ? <span className="flex justify-center w-60 mx-auto h-12 rounded-2xl py-3 text-center text-white font-semibold mt-8 cursor-pointer bg-blue-green"> 
                                    <svg className="animate-spin mr-3 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                </span>
                              : <span onClick={()=> {getLogin()}} className="block w-60 h-12 mx-auto rounded-2xl py-3 text-center text-white font-semibold mt-8 cursor-pointer bg-blue-green">Войти</span>
                }
            </div>
        </>
    )
}