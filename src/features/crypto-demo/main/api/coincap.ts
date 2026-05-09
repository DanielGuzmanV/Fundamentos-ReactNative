// Instancia del cliente para las peticiones
import axios from "axios";
import { COINCAP_API_BASE_URL, COINCAP_API_KEY } from "../config/apiConfig";

export const coincapApi = axios.create({
  baseURL: COINCAP_API_BASE_URL,
})

// Interceptor para agregar la api key
coincapApi.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${COINCAP_API_KEY}`;
  return config;
})