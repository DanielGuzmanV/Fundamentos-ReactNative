import axios from "axios";
import { COINGECKO_API_BASE_URL, COINGECKO_API_KEY } from "../config/coingeckoConfig";

// Instancia de axios
export const coinsgeckoApi = axios.create({
  baseURL: COINGECKO_API_BASE_URL,
  headers: {
    'Accept': 'application/json',
  }
})

// Interceptor para agregar la API Key
coinsgeckoApi.interceptors.request.use(
  (config) => {
    if(COINGECKO_API_KEY) {
      config.headers['x-cg-demo-api-key'] = COINGECKO_API_KEY;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)