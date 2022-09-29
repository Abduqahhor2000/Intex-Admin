export const scrollOf = (control) => {

    let bodyTag = document.querySelector("body")
    if(control){
        bodyTag.classList.add("overflow-y-hidden")
        bodyTag.classList.add("h-screen")
        bodyTag.classList.add("p-0")
        bodyTag.classList.add("m-0")
    } else{
        bodyTag.classList.remove("overflow-y-hidden")
        bodyTag.classList.remove("h-screen")
        bodyTag.classList.remove("p-0")
        bodyTag.classList.remove("m-0")
    }

}