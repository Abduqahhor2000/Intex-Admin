export const timeConvert = (date) => {
    const date1 = new Date(date);
    return `${date1.getHours < 10 ? "0" : ""}${date1.getHours()}:${date1.getMinutes() < 10 ? "0" : ""}${date1.getMinutes()}  ${date1.getDate() < 10 ? "0" : ""}${date1.getDate()}.${date1.getMonth() < 9 ? "0" : ""}${date1.getMonth() + 1}.${date1.getFullYear() - 2000}`
}