import axios from "axios";

export const api = axios.create({
  baseURL: "https://gym.switchdreams.com.br/api",
});