import axios from "axios";

const BASE_URL = import.meta.env.REACT_APP_API_BASE;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30_000,
});

export default api;
