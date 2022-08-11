const inputIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
                        <path d="M32 13.05V15.95C30.7607 15.95 30.5455 16.4575 30.5455 17.8553V24.3774C30.5455 28.0227 28.4218 28.9536 24.7273 29V26.1C26.7695 26.0536 27.6364 26.3233 27.6364 24.128V17.8974C27.5787 17.1191 27.7262 16.3393 28.064 15.6354C28.384 15.086 28.9029 14.6797 29.5142 14.5C28.9029 14.3203 28.384 13.914 28.064 13.3647C27.7262 12.6607 27.5787 11.8809 27.6364 11.1026V4.87055C27.6364 2.6767 26.7695 2.9464 24.7273 2.9V0C28.4218 0.0464 30.5455 0.9773 30.5455 4.6226V11.1447C30.5455 12.541 30.7607 13.05 32 13.05ZM0 13.05V15.95C1.23927 15.95 1.45455 16.4575 1.45455 17.8553V24.3774C1.45455 28.0227 3.57818 28.9536 7.27273 29V26.1C5.23055 26.0536 4.36364 26.3233 4.36364 24.128V17.8974C4.42126 17.1191 4.27385 16.3393 3.936 15.6354C3.61569 15.0857 3.09616 14.6793 2.48436 14.5C3.09616 14.3207 3.61569 13.9143 3.936 13.3647C4.27385 12.6607 4.42126 11.8809 4.36364 11.1026V4.87055C4.36364 2.6767 5.23055 2.9464 7.27273 2.9V0C3.57818 0.0464 1.45455 0.9773 1.45455 4.6226V11.1447C1.45455 12.541 1.23927 13.05 0 13.05ZM24.7273 10.15H7.27273V18.85H24.7273V10.15ZM10.1818 13.05H21.8182V15.95H10.1818V13.05Z" fill="#545454"/>
                  </svg>


export default function SiteSectionMadal({typeMadal, setTypeMadal, typeInfo, setTypeInfo}) {
    if(!typeMadal){
        return;
    }

    return(
        <>
            <div onClick={()=> setTypeMadal(null)} className="absolute top-0 left-0 w-screen h-screen" style={{"background-color": "rgba(0, 0, 0, 0.2)", "backdrop-filter": "blur(7px)"}}></div>
            <div className="absolute flex flex-col justify-between items-center w-2/3 h-96 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-slate-100 p-12 pt-6 rounded-3xl">
                <span onClick={() => setTypeMadal(null)} className="absolute top-8 right-8 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <rect width="41.3575" height="3.11651" rx="1.55825" transform="matrix(0.727944 0.685636 -0.727944 0.685636 2.55737 0.508789)" fill="#B9B9B9"/>
                        <rect width="41.3575" height="3.11651" rx="1.55825" transform="matrix(0.727944 -0.685636 0.727944 0.685636 0.00292969 28.5811)" fill="#B9B9B9"/>
                    </svg>
                </span>
                {
                    typeMadal === "tel" ? 
                    <>
                        <h2 className="text-5xl" style={{"color": "#009398"}}>Телефонный номер</h2>
                        <div className="w-96">
                            <label className="relative text-xl w-full text-gray-500 pb-5">Номер<br/>
                                <input defaultValue={typeInfo.tel} className="text-black outline-none w-full h-9 mt-2.5 border-b-2 border-slate-400 px-3" type="tel"/>     
                                <span className="absolute block right-full bottom-4 mr-2">{inputIcon}</span>  
                            </label>
                        </div>
                        <span className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5" style={{"backgroundColor" : "rgba(0, 147, 152, 1)"}}>Изменить</span>
                    </> :


                    typeMadal === "address" ? 
                    <>
                        <h2 className="text-5xl" style={{"color": "#009398"}}>Адрес</h2>
                        <div className="w-full flex justify-around">
                            <label className="relative text-xl w-96 text-gray-500 pb-4">Название<br/>
                                <input defaultValue={typeInfo.address} className="text-black outline-none w-full h-9 mt-2.5 border-b-2 border-slate-400 px-3" type="text"/>     
                                <span className="absolute block right-full bottom-4 mr-2">{inputIcon}</span>  
                            </label>
                            <label className="relative text-xl w-96 text-gray-500 pb-4">На узбекском<br/>
                                <input defaultValue={typeInfo.address_uz} className="text-black outline-none w-full h-9 mt-2.5 border-b-2 border-slate-400 px-3" type="text"/>     
                                <span className="absolute block right-full bottom-4 mr-2">{inputIcon}</span>  
                            </label>
                        </div>
                        <span className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5" style={{"backgroundColor" : "rgba(0, 147, 152, 1)"}}>Изменить</span>
                    </> :


                    typeMadal === "timeWork" ? 
                    <>
                        <h2 className="text-5xl" style={{"color": "#009398"}}>Рабочее время</h2>
                        <div className="w-full flex justify-around">
                            <label className="relative text-xl w-96 text-gray-500 pb-4">Название<br/>
                                <input defaultValue={typeInfo.timeWork} className="text-black outline-none w-full h-9 mt-2.5 border-b-2 border-slate-400 px-3" type="text"/>     
                                <span className="absolute block right-full bottom-4 mr-2">{inputIcon}</span>  
                            </label>
                            <label className="relative text-xl w-96 text-gray-500 pb-4">На узбекском<br/>
                                <input defaultValue={typeInfo.timeWork_uz} className="text-black outline-none w-full h-9 mt-2.5 border-b-2 border-slate-400 px-3" type="text"/>     
                                <span className="absolute block right-full bottom-4 mr-2">{inputIcon}</span>  
                            </label>
                        </div>
                        <span className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5" style={{"backgroundColor" : "rgba(0, 147, 152, 1)"}}>Изменить</span>
                    </> :


                    typeMadal === "telegram" ? 
                    <>
                        <h2 className="text-5xl" style={{"color": "#009398"}}>Телеграм</h2>
                        <div className="w-96">
                            <label className="relative text-xl w-full text-gray-500 pb-5">Линк<br/>
                                <input defaultValue={typeInfo.telegram} className="text-black outline-none w-full h-9 mt-2.5 border-b-2 border-slate-400 px-3" type="link"/>     
                                <span className="absolute block right-full bottom-4 mr-2">{inputIcon}</span>  
                            </label>
                        </div>
                        <span className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5" style={{"backgroundColor" : "rgba(0, 147, 152, 1)"}}>Изменить</span>
                    </> :

                    
                    <>
                        <h2 className="text-5xl" style={{"color": "#009398"}}>Инстаграм</h2>
                        <div className="w-96">
                            <label className="relative text-xl w-full text-gray-500 pb-5">Линк<br/>
                                <input defaultValue={typeInfo.instagram} className="text-black outline-none w-full h-9 mt-2.5 border-b-2 border-slate-400 px-3" type="link"/>     
                                <span className="absolute block right-full bottom-4 mr-2">{inputIcon}</span>  
                            </label>
                        </div>
                        <span className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5" style={{"backgroundColor" : "rgba(0, 147, 152, 1)"}}>Изменить</span>
                    </>
                }   
            </div>
        </>
    )
}