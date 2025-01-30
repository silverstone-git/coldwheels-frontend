import axios from 'axios';
import { useCookies } from 'vue3-cookies';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api', // Use environment variable for base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to attach the auth token
axiosInstance.interceptors.request.use((config) => {
  const { cookies } = useCookies();
  const token = cookies.get('auth_token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Add a response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized errors (e.g., redirect to login)
      const authStore = useAuthStore();
      authStore.logout();
      window.location.href = '/login'; // Or use Vue Router to redirect
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
