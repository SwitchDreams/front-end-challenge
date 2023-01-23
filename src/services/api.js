import axios from "axios";

const api = axios.create({
    //baseURL: 'http://192.168.1.11:3333'
    baseURL: ' https://gym.switchdreams.com.br'
})

export { api };