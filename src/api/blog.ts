// src/api/articles.ts

import api, { apiRequest } from "./axios";
import { ApiResponse } from "./axios";

// Get all articles
export const getPosts = (): Promise<ApiResponse<any[]>> => {
  return api.get("/posts");
};

// Get a single article by ID
export const getPostsById = (id: number): Promise<ApiResponse<any>> => {
  return api.get(`/posts/${id}`);
};

// Create a new article
export const createPost = (postData: any): Promise<ApiResponse<any>> => {
  return apiRequest("post", "/posts/create", postData, true, true);
};

// Update an article
export const updatePost = (
  id: number,
  postData: any
): Promise<ApiResponse<any>> => {
  return apiRequest("put", `/posts/${id}`, postData, true, true);
};

// Delete an article
export const deletePost = (id: number): Promise<ApiResponse<void>> => {
  return apiRequest("delete", `/posts/${id}`, undefined, true);
};
