
export const numberConvert = (number) => {
    console.log(number)

    let newNumber = "";
    let numArr = Array.from(number.toString()) 
    console.log(numArr)
    
    let numHead = numArr.length % 3 
    if(numHead !== 0){
        newNumber += `${numArr.slice(0, numHead).join("")}`
    }
    console.log(numHead)

    for (let i = 0; i < ((numArr.length - numHead) / 3); i++){
        if(numHead !== 0){
            newNumber += `.${numArr.slice(numHead + (i * 3), numHead + (i * 3) + 3).join("")}`
        }
        else{
            if((((numArr.length - numHead) / 3) - 1) > i){
                newNumber += `${numArr.slice(numHead + (i * 3), numHead + (i * 3) + 3).join("")}.`
            }else{
                newNumber += `${numArr.slice(numHead + (i * 3), numHead + (i * 3) + 3).join("")}`  
            }
        }
    }

    console.log(newNumber)

    return newNumber;

}