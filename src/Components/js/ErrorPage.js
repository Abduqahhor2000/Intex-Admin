import { useSelector } from "react-redux";


export default function ErrorPage() {
    // const error = useSelector(state => state.error.error)

    return(
        <>
           <span className="inline-block text-3xl mt-5 mr-5">This page not found!</span><a className="inline-block mt-5 text-3xl text-blue-500 bordered-2 border-solid border-blue" href="/">Back home page</a>
        </>
    )
}