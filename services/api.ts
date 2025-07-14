import { API_BASE_URL } from '@env'; 
import axios from "axios";

const api = axios.create({
  baseURL: API_BASE_URL || "http://localhost:3000/api/trips", // Fallback to local server for development
  
});

export default api;