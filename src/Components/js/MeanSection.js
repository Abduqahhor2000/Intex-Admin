import "../scss/MeanSection.scss"
import { Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../redux/userReducer";
import { addAllCategories, delAllCategories } from "../../redux/categoryReducer"
import { addAllConsultations, delAllConsultations } from "../../redux/consultationReducer"
import { addAllProducts, delAllProducts } from "../../redux/productReducer";
import { addAllOrders, delAllOrders } from "../../redux/orderReducer"
import { addAllSiteInfo, delAllSiteInfo } from "../../redux/siteInfoReducer"
import { addProductStatus, delProductStatus } from "../../redux/productStatusReducer";
import { getCategories } from "./fetching/getCategories"
import { getConsultations } from "./fetching/getConsultations"
import { getSiteInfo } from "./fetching/getSiteInfo"
import { getProducts } from "./fetching/getProducts"
import { getOrders } from "./fetching/getOrders"
import { getProductStatus } from "./fetching/getProductStatus";

export default function MeanSection() {
    const [timer, setTimer] = useState("")
    const user = useSelector(state => state.user.user)
    const token = useSelector(state => state.user.user.token)
    let {pathname} = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function start() {
        getConsultations(token, dispatch, addAllConsultations)
        getProducts(token, dispatch, addAllProducts)
        getOrders(token, dispatch, addAllOrders)
        getCategories(token, dispatch, addAllCategories)
        getSiteInfo(token, dispatch, addAllSiteInfo)
        getProductStatus(token, dispatch, addProductStatus)
        setTimer(new Date().getTime())
    }

    useEffect(()=>{
      if(!token){
        navigate("/login")
      }
      if(token && (((new Date().getTime() - timer) > 60000) || (timer === ""))){
        start()
      }
      if(pathname === "/"){
        navigate("/products")
      }
    }, [navigate, token, pathname, timer])
 
    return(
        <>
            <div className="mean-section flex">
                <div className="bar w-72 h-screen bg-white pl-10 fixed">
                    <div className="logo text-2xl py-8 mb-9 font-semibold"><a href="/">INTEX-MARKET.UZ</a></div>
                    <ul className="flex flex-col">
                        <Link to="/products" className={`mb-4 text-2xl cursor-pointer ${pathname === "/products" ? "active" : "" }`}>Продукты</Link>
                        <Link to="/orders" className={`mb-4 text-2xl cursor-pointer ${pathname === "/orders" ? "active" : "" }`}>Заказы</Link>
                        <Link to="/types" className={`mb-4 text-2xl cursor-pointer ${pathname === "/types" ? "active" : "" }`}>Категории</Link>
                        <Link to="/site" className={`mb-4 text-2xl cursor-pointer ${pathname === "/site" ? "active" : "" }`}>Сайт</Link>
                    </ul>    
                </div>
                <div className="mean w-5/6 min-h-screen ml-72 pt-24">
                    <div className="line z-10 fixed flex items-center text-2xl justify-end w-full px-11 top-0 right-0 h-24 after:content-[''] after:w-screen after:bottom-0 after:right-0 after:absolute after:bg-pink-500">
                        <div className="cursor-pointer"><a href="https://intex-market.uz">Просмотр веб-сайта</a></div>
                        <div className="mx-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="15" viewBox="0 0 3 15" fill="none">
                                <path d="M1.5 0.5V14.5" stroke="#D6D6D6" strokeWidth="2"/>
                            </svg>
                        </div>
                        <div onClick={() =>{ dispatch(removeUser()); dispatch(delAllCategories()); dispatch(delAllConsultations()); dispatch(delAllOrders()); dispatch(delAllProducts()); dispatch(delProductStatus()); dispatch(delAllSiteInfo())}} className="admin flex cursor-pointer">
                            <svg className="mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 20 25" fill="none">
                                <path d="M12.541 10.6078C13.2961 10.1794 13.9243 9.55878 14.3618 8.80898C14.7993 8.05918 15.0306 7.20694 15.032 6.33883C15.0197 5.66814 14.8748 5.00652 14.6056 4.3921C14.3365 3.77767 13.9484 3.22258 13.4637 2.75883C12.979 2.29507 12.4074 1.93182 11.7817 1.68999C11.156 1.44817 10.4886 1.33256 9.81805 1.34983C9.14747 1.33256 8.48011 1.44817 7.85441 1.68999C7.22872 1.93182 6.65706 2.29507 6.17239 2.75883C5.68772 3.22258 5.29962 3.77767 5.03045 4.3921C4.76128 5.00652 4.61636 5.66814 4.60405 6.33883C4.60554 7.20694 4.83679 8.05918 5.2743 8.80898C5.71182 9.55878 6.34001 10.1794 7.09505 10.6078C5.23011 11.1175 3.5822 12.2214 2.40111 13.752C1.22003 15.2826 0.57017 17.1566 0.550049 19.0898C0.550049 23.9678 4.95005 23.4688 6.57505 23.5798H13.005C16.075 23.5798 19.03 23.2468 19.03 19.0898C19.0221 17.1616 18.3836 15.289 17.212 13.7576C16.0404 12.2261 14.4 11.12 12.541 10.6078ZM5.76305 6.39483C5.77145 5.87282 5.88335 5.35768 6.09226 4.87923C6.30118 4.40079 6.60296 3.96854 6.98013 3.60757C7.35729 3.24659 7.80234 2.96404 8.28948 2.7763C8.77662 2.58855 9.29618 2.49934 9.81805 2.51383C10.3415 2.49159 10.8641 2.57549 11.3542 2.76047C11.8444 2.94546 12.2921 3.22772 12.6704 3.59025C13.0486 3.95278 13.3496 4.38809 13.5553 4.86999C13.7609 5.35188 13.8669 5.87039 13.8669 6.39432C13.8669 6.91826 13.7609 7.43678 13.5553 7.91868C13.3496 8.40057 13.0486 8.83587 12.6704 9.1984C12.2921 9.56093 11.8444 9.84319 11.3542 10.0282C10.8641 10.2132 10.3415 10.2971 9.81805 10.2748C8.77263 10.2748 7.76756 9.87132 7.01231 9.14849C6.25706 8.42565 5.80991 7.43924 5.76405 6.39483H5.76305ZM13.063 22.4718H6.63205C4.54705 22.4168 1.76605 22.6378 1.76605 19.0898C1.81955 16.9876 2.70223 14.9918 4.22155 13.5379C5.74086 12.084 7.7735 11.2899 9.87605 11.3288C11.9786 11.2899 14.0112 12.084 15.5306 13.5379C17.0499 14.9918 17.9326 16.9876 17.986 19.0898C17.928 21.9688 16.422 22.4688 13.062 22.4688L13.063 22.4718Z" fill="#A6A6A6" stroke="#A6A6A6"/>
                            </svg>
                            {user.user.user_firstname} {user.user.user_lastname}
                        </div>
                    </div>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}