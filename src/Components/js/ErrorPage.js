import { useSelector } from "react-redux";


export default function ErrorPage() {
    const error = useSelector(state => state.error.error)

    return(
        <>
            {error}
        </>
    )
}