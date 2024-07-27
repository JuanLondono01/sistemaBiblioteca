import axios from 'axios'

export const login = axios.create({
    baseURL: 'http://localhost:2700'
})