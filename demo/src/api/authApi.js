import api from "./axiosInstance";

export const loginApi=(data)=>{
    api.post("/users",data)
}
export const getAllUsers=()=>api.get("/users")
export const getUsersById=(id)=>api.get(`/users/${id}`)