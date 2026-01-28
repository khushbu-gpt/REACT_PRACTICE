import axios from "axios";

const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  timeout: 5000,
  // withCredentials: true,
});

// Request Interceptor (token auto add)
api.interceptors.request.use(
  (config) => {
    // console.log("Request sent:", config.url, config.method, config.data);
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      await api.post("/auth/refresh");
      return api(error.config);
      // localStorage.removeItem("token");
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
export default api;
