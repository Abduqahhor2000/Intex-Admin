import axios from "axios"
export const https = axios.create({
    baseURL : "https://market-index.herokuapp.com/",
})

