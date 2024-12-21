// src/api/axios.ts

import { getCookie } from "@/shared/utils";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// Define types for API response (generic type for different API responses)
export interface ApiResponse<T> {
  data: T;
  status: number;
}

// Create an Axios instance with base URL from environment variable
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // This will resolve based on the environment
});

// Custom API call function that handles the authentication flag
export const apiRequest = async <T>(
  method: "get" | "post" | "put" | "delete",
  url: string,
  data?: any,
  requiresAuth: boolean = false,
  isFormData: boolean = false // Flag to indicate if we are sending a file (FormData)
): Promise<ApiResponse<T>> => {
  const config: AxiosRequestConfig = {
    method,
    url,
    data,
  };

  // If the request requires authentication, add the token to the Authorization header
  if (requiresAuth) {
    const token = getCookie("accessToken"); // Or use cookies, depending on your implementation
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
  }

  // If we are sending FormData (e.g., file upload), set content type to undefined
  if (isFormData && config.headers) {
    console.log("this is config", config);
    delete config.headers["Content-Type"];
  }

  // Make the API request
  const response = await api(config);
  return response.data;
};

export default api;
