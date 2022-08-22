import { useSelector } from "react-redux";
import { useState } from "react";
import gr from "../../../img/Gr.png"
import { https } from "../../../axios";

const inputIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
                        <path d="M32 13.05V15.95C30.7607 15.95 30.5455 16.4575 30.5455 17.8553V24.3774C30.5455 28.0227 28.4218 28.9536 24.7273 29V26.1C26.7695 26.0536 27.6364 26.3233 27.6364 24.128V17.8974C27.5787 17.1191 27.7262 16.3393 28.064 15.6354C28.384 15.086 28.9029 14.6797 29.5142 14.5C28.9029 14.3203 28.384 13.914 28.064 13.3647C27.7262 12.6607 27.5787 11.8809 27.6364 11.1026V4.87055C27.6364 2.6767 26.7695 2.9464 24.7273 2.9V0C28.4218 0.0464 30.5455 0.9773 30.5455 4.6226V11.1447C30.5455 12.541 30.7607 13.05 32 13.05ZM0 13.05V15.95C1.23927 15.95 1.45455 16.4575 1.45455 17.8553V24.3774C1.45455 28.0227 3.57818 28.9536 7.27273 29V26.1C5.23055 26.0536 4.36364 26.3233 4.36364 24.128V17.8974C4.42126 17.1191 4.27385 16.3393 3.936 15.6354C3.61569 15.0857 3.09616 14.6793 2.48436 14.5C3.09616 14.3207 3.61569 13.9143 3.936 13.3647C4.27385 12.6607 4.42126 11.8809 4.36364 11.1026V4.87055C4.36364 2.6767 5.23055 2.9464 7.27273 2.9V0C3.57818 0.0464 1.45455 0.9773 1.45455 4.6226V11.1447C1.45455 12.541 1.23927 13.05 0 13.05ZM24.7273 10.15H7.27273V18.85H24.7273V10.15ZM10.1818 13.05H21.8182V15.95H10.1818V13.05Z" fill="#545454"/>
                  </svg>

export default function CategorySectionMadal({categoryMadal, setCategoryMadal, name_ru, name_uz, id}) {
    const token = useSelector(state => state.user.user.token)
    const [statusReq, setStatusReq] = useState(null)
    const [nameRu, setNameRu] = useState(name_ru)
    const [nameUz, setNameUz] = useState(name_uz)

    const editCategory = async () => {
        setStatusReq("active")
        try{
            await https({ 
                method: 'put',
                url: `/api/category/${id}`,
                headers:{
                    Authorization: `Bearer ${token}`,
                },
                data:{
                    "nameRu": nameRu,
                    "nameUz": nameUz,
                }
            })
            setStatusReq("complate")
        }catch(err){
            console.log(err)
        }
    }
    const addCategory = async () => {
        setStatusReq("active")
        try{
            await https({ 
                method: 'post',
                url: `/api/category/`,
                headers:{
                    Authorization: `Bearer ${token}`,
                },
                data:{
                    "nameRu": nameRu,
                    "nameUz": nameUz,
                }
            })
            setStatusReq("complate")
        }catch(err){
            console.log(err)
        }
    }
    const deleteCategory = async () => {
        setStatusReq("active")
        try{
            await https({ 
                method: 'delete',
                url: `/api/category/${id}`,
                headers:{
                    Authorization: `Bearer ${token}`,
                },
                data:{
                    "depth": "85",  
                }
            })
            setStatusReq("complate")
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <div onClick={()=>{ setCategoryMadal(false);}} className={`fixed top-0 z-10 left-0 w-screen h-screen`} style={{"backgroundColor": "rgba(0, 0, 0, 0.2)", "backdropFilter": "blur(7px)"}}></div>
            <div className={`fixed z-10 flex flex-col justify-between items-center w-2/3 h-96 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-slate-100 p-12 pt-6 rounded-3xl`}>
                <span onClick={() =>{ setCategoryMadal(false);}} className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <rect width="41.3575" height="3.11651" rx="1.55825" transform="matrix(0.727944 0.685636 -0.727944 0.685636 2.55737 0.508789)" fill="#B9B9B9"/>
                        <rect width="41.3575" height="3.11651" rx="1.55825" transform="matrix(0.727944 -0.685636 0.727944 0.685636 0.00292969 28.5811)" fill="#B9B9B9"/>
                    </svg>
                </span>
                {
                    categoryMadal === true ? 
                        <>  { statusReq === null ? 
                            <>
                                <h2 className="text-5xl" style={{"color": "#009398"}}>Добавить категории</h2>
                                <div className="w-full flex justify-around">
                                    <label className="relative text-xl w-96 text-gray-500 pb-5">Название<br/>
                                        <input 
                                            value={nameRu} 
                                            onChange={(e)=> setNameRu(e.target.value)}
                                            className="text-black outline-none w-full h-9 mt-2.5 border-b-2 border-slate-400 px-3"
                                            type="text"/>     
                                        <span className="absolute block right-full bottom-4 mr-2">{inputIcon}</span>  
                                    </label>
                                    <label className="relative text-xl w-96 text-gray-500 pb-5">На узбекском<br/>
                                        <input 
                                            value={nameUz} 
                                            onChange={(e)=> setNameUz(e.target.value)}
                                            className="text-black outline-none w-full h-9 mt-2.5 border-b-2 border-slate-400 px-3" 
                                            type="text"/>     
                                        <span className="absolute block right-full bottom-4 mr-2">{inputIcon}</span>  
                                    </label>
                                </div>
                                <span onClick={() =>{ id === null ? addCategory() : editCategory()}} className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5" style={{"backgroundColor" : "rgba(0, 147, 152, 1)"}}>Изменить</span>     
                            </> :
                            <>  
                                <div className="flex flex-col items-center">
                                    <img className={`grayscale duration-300 w-40 ${ statusReq !== "active" ? "grayscale-0" : ""}`} src={gr} alt=""/> 
                                    <h2 className="text-5xl font-bolder mb-10">Спасибо!</h2>
                                    <p className="text-2xl font-middle">Ваше исправление было успешно завершено.</p>
                                </div> 
                            </>    
                            }
                            
                        </> : 
                        <>{
                            statusReq === null ? <> 
                                <h2 className="text-5xl" style={{"color": "#009398"}}>Действия</h2>
                                <div className="w-full flex justify-center">
                                    <span>Siz rostdan ham shu bo'limni o'chirmoqchimisiz!!!</span>
                                </div>
                                <div className="flex justify-around w-full">
                                    <span onClick={()=> deleteCategory()} className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5" style={{"backgroundColor" : "rgba(0, 147, 152, 1)"}}>Da</span>
                                    <span onClick={()=> setCategoryMadal(false)} className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5" style={{"backgroundColor" : "rgb(152, 0, 147)"}}>Net</span>   
                                </div>
                            </> : 
                            <>
                                <div className="flex flex-col items-center">
                                    <img className={`grayscale duration-300 w-40 ${ statusReq !== "active" ? "grayscale-0" : ""}`} src={gr} alt=""/> 
                                    <h2 className="text-5xl font-bolder mb-10">Спасибо!</h2>
                                    <p className="text-2xl font-middle">Удаление прошло успешно.</p>
                                </div>  
                            </>
                        }
                            
                        </>
                }
            </div>
        </>
    )
}