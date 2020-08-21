import axios from "axios";

export const api = axios.create({
  baseURL: "https://fs09-lamkhang-vexere-api.herokuapp.com/api"
})