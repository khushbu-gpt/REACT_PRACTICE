import api from "./axiosInstance";

export const loginApi=(data)=>api.post("/users",data)
export const getAllUsers=()=>api.get("/users")