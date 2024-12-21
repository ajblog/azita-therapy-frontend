// src/api/articles.ts

import api from "./axios";
import { ApiResponse } from "./axios";

// Create a new article
export const userSignIn = (userData: any): Promise<ApiResponse<any>> => {
  return api.post("/users/login", userData);
};
