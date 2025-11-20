// src/services/applyApi.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE || "http://localhost:8500/api/v1";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30_000,
});

export default api;
