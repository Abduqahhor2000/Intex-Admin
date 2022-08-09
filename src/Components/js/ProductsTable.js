import "../scss/ProductsTable.scss"
import bas from "../../img/bas.png"

export default function ProductsTable() {
    return (
        <>
            <div className="products-table min-h-screen px-10 py-6">
                <div className="search_and_add flex justify-between">
                    <div className="search flex shadow-lg items-center justify-between">
                        <input className="input border-none outline-none pb-1 leading-6" placeholder="Найти"/>
                        <span className="icon block border-solid border-l-2">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.739 22.825L17.77 16.856C19.3966 14.8666 20.1964 12.3281 20.0039 9.76557C19.8113 7.20304 18.6412 4.81254 16.7356 3.08853C14.83 1.36452 12.3346 0.438901 9.76565 0.503133C7.1967 0.567364 4.75071 1.61653 2.93362 3.43362C1.11653 5.25071 0.0673644 7.6967 0.00313259 10.2656C-0.0610992 12.8346 0.864519 15.33 2.58853 17.2356C4.31254 19.1412 6.70304 20.3113 9.26557 20.5039C11.8281 20.6964 14.3666 19.8966 16.356 18.27L22.325 24.239C22.4173 24.3345 22.5276 24.4107 22.6496 24.4631C22.7716 24.5155 22.9028 24.5431 23.0356 24.5443C23.1684 24.5454 23.3001 24.5201 23.423 24.4698C23.5459 24.4195 23.6575 24.3453 23.7514 24.2514C23.8453 24.1575 23.9195 24.0459 23.9698 23.923C24.0201 23.8001 24.0454 23.6684 24.0443 23.5356C24.0431 23.4028 24.0155 23.2716 23.9631 23.1496C23.9107 23.0276 23.8345 22.9173 23.739 22.825ZM10.032 18.532C8.44976 18.532 6.90304 18.0628 5.58745 17.1838C4.27185 16.3047 3.24647 15.0553 2.64097 13.5935C2.03547 12.1317 1.87704 10.5231 2.18573 8.97129C2.49441 7.41944 3.25633 5.99397 4.37515 4.87515C5.49397 3.75633 6.91944 2.99441 8.47129 2.68573C10.0231 2.37704 11.6317 2.53547 13.0935 3.14097C14.5553 3.74647 15.8047 4.77185 16.6838 6.08745C17.5628 7.40304 18.032 8.94976 18.032 10.532C18.032 12.6537 17.1892 14.6886 15.6889 16.1889C14.1886 17.6892 12.1537 18.532 10.032 18.532Z" fill="#009398"/>
                            </svg>
                        </span>
                    </div>
                    <div className="add pt-4 text-center text-xl font-bold text-white shadow-lg cursor-pointer">
                        + Добавить продукт
                    </div>
                </div>

                <div className="table w-full pt-3">
                    <div className="product-type flex justify-center items-center mb-20">
                        <span className="type cursor-pointer text-4xl mr-5 py-4 font-bold text-center active">Каркасные</span>
                        <span className="type cursor-pointer text-4xl ml-5 py-4 font-bold text-center">Надувные</span>
                    </div>
                    <div>
                        <table className="w-full">
                            <thead className="text-xl bg-white text-left ">
                                <th className="py-4 rounded-l-3xl pl-11">Изображение</th>
                                <th className="py-4">Цена(сум)</th>
                                <th className="py-4">Количество</th>
                                <th className="py-4">Рамка</th>
                                <th className="py-4">Размер(м)</th>
                                <th className="py-4">Глубина(см)</th>
                                <th className="py-4 rounded-r-3xl">Действия</th>
                            </thead>
                            <div className="mt-5"></div>
                            <tbody>
                                <tr className="bg-white">
                                    <td className="py-4 rounded-l-3xl pl-11">
                                        <div className="w-32 h-12 bg-center bg-cover bg-no-repeat" style={{ "backgroundImage": `url(${bas})`}}></div>
                                    </td>
                                    <td className="py-4">
                                        <div className="">1.800.000 сум</div>
                                        <div className="font-bold text-2xl">1.520.000 сум</div>
                                    </td>
                                    <td className="py-4">Металлический</td>
                                    <td className="py-4">2,7</td>
                                    <td className="py-4">60</td>
                                    <td className="py-4">вудуе</td>
                                    <td className="py-4 rounded-r-3xl">вудуе</td>
                                </tr>
                                <div className="mt-2"></div>
                                <tr className="bg-white">
                                    <td className="py-4 rounded-l-3xl pl-11">berdik</td>
                                    <td className="py-4">1.800.000 сум</td>
                                    <td className="py-4">Металлический</td>
                                    <td className="py-4">2,7</td>
                                    <td className="py-4">60</td>
                                    <td className="py-4">вудуе</td>
                                    <td className="py-4 rounded-r-3xl">вудуе</td>
                                </tr>
                                <div className="mt-2"></div>
                                <tr className="bg-white">
                                    <td className="py-4 rounded-l-3xl pl-11">berdik</td>
                                    <td className="py-4">1.800.000 сум</td>
                                    <td className="py-4">Металлический</td>
                                    <td className="py-4">2,7</td>
                                    <td className="py-4">60</td>
                                    <td className="py-4">вудуе</td>
                                    <td className="py-4 rounded-r-3xl">вудуе</td>
                                </tr>
                                <div className="mt-2"></div>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}