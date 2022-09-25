
export default function OrderMadal({orderMadal, setOrderMadal, orderInfo}) {
    if(!orderMadal){
        return;
    }

    return(
        <>
            <div onClick={()=> setOrderMadal(false)} className="fixed z-10 top-0 left-0 w-screen h-screen bg-black-02 backdrop-blur"></div>
            <div className="fixed z-10 flex flex-col justify-between items-center w-2/3 h-96 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 bg-slate-100 p-12 pt-6 rounded-3xl">
                <span onClick={() => setOrderMadal(false)} className="absolute top-8 right-8 p-2 rounded-full hover:bg-slate-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <rect width="41.3575" height="3.11651" rx="1.55825" transform="matrix(0.727944 0.685636 -0.727944 0.685636 2.55737 0.508789)" fill="#B9B9B9"/>
                        <rect width="41.3575" height="3.11651" rx="1.55825" transform="matrix(0.727944 -0.685636 0.727944 0.685636 0.00292969 28.5811)" fill="#B9B9B9"/>
                    </svg>
                </span>
                {
                    orderInfo === true ? 
                        <>
                            <h2 className="text-5xl text-blue-green">Действия</h2>
                            <div className="w-full flex justify-center">
                                <span>Siz rostdan ham shu bo'limning statusini o'zgartirmoqchimisiz!!!</span>
                            </div>
                            <div className="flex justify-around w-full">
                                <span className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5 bg-blue-green">Da</span>
                                <span onClick={()=> setOrderMadal(false)} className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5 bg-red-blue">Net</span>   
                            </div>
                                </> : 
                        <>
                            <h2 className="text-5xl text-blue-green">Действия</h2>
                            <div className="w-full flex justify-center">
                                <span>Siz rostdan ham shu bo'limni o'chirmoqchimisiz!!!</span>
                            </div>
                            <div className="flex justify-around w-full">
                                <span className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5 bg-blue-green">Da</span>
                                <span onClick={()=> setOrderMadal(false)} className="block cursor-pointer h-12 rounded-3xl text-3xl text-white px-16 py-1.5 bg-red-blue">Net</span>   
                            </div>
                        </>
                }
            </div>
        </>
    )
}