
export default function NotFoundPage() {

    return(
        <div className="flex justify-center items-center h-screen">
            <div className=" flex flex-col items-center text-3xl mt-5 mr-5">
                <div className="text-9xl mb-10" style={{"color": "#009398"}}>404</div>
                <div className="text-5xl font-extrabold mb-5">Page not found</div>
                <p className="text-base font-extrabold mb-10">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                <a href="/" className="inline-block w-60 h-16 bg-black text-white text-center py-3.5 cursor-pointer">Back to home</a>
            </div>
        </div>
    )
}