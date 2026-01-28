// src/api.js
import axios from "axios";

// Axios instance
const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  timeout: 5000,
  withCredentials: true, 
});

// Request interceptor (optional custom headers)
api.interceptors.request.use(
  (config) => {
    config.headers["X-App-Client"] = "MyReactApp"; 
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (handle 401 → refresh)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Only retry once to avoid infinite loop
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        console.log("401 detected → refreshing token...");
        await api.post("/auth/refresh");
        console.log("Token refreshed → retrying request");
        return api(originalRequest);
      } catch (refreshError) {
        console.log("Refresh failed → redirecting to login");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Logout helper
export const logout = async () => {
  try {
    await api.post("/auth/logout"); 
    console.log("Logged out successfully");
    window.location.href = "/login";
  } catch (err) {
    console.error("Logout failed:", err);
  }
};

export default api;
