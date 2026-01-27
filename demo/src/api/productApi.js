import api from "./axiosInstance"
export const fetchProduct=()=>api.get("/products")