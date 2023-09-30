import axios from "axios"

export const api = axios.create({
    /* inserção da api oferecida */
    baseURL: 'https://apiadonis2023.onrender.com',
    headers: {
        Accept: 'application/json'
    }
})