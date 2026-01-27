import axios from "axios";

const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  timeout: 1000,
  withCredentials: true,
});

// Request Interceptor (token auto add)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error)
  },
);
export default api;
