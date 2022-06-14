import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://switch-gym.herokuapp.com/api',
  // baseURL: 'https://192.168.42.222:19000'
})