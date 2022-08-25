import axios from "axios"

export const baseURL = "http://31.44.6.77:5555/" // baseURL = "https://market-index.herokuapp.com/"

export const https = axios.create({
    
    baseURL : baseURL,
})

