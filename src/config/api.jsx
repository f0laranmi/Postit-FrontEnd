import axios from "axios";

export const instance = axios.create ({
    baseURL: 'https://postitfola-server.onrender.com/api'
})