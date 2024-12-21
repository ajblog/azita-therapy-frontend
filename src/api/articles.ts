// src/api/articles.ts

import api, { apiRequest } from "./axios";
import { ApiResponse } from "./axios";

// Define types for API responses related to articles
export interface Article {
  id?: number;
  name: string;
  description: string;
  released_date: string;
  file_address: string;
  writer: string;
}

// Get all articles
export const getArticles = (): Promise<ApiResponse<Article[]>> => {
  return api.get("/articles");
};

// Get a single article by ID
export const getArticleById = (id: number): Promise<ApiResponse<Article>> => {
  return api.get(`/articles/${id}`);
};

// Create a new article
export const createArticle = (
  articleData: any
): Promise<ApiResponse<Article>> => {
  return apiRequest("post", "/articles/create", articleData, true, true);
};

// Update an article
export const updateArticle = (
  id: number,
  articleData: Article
): Promise<ApiResponse<Article>> => {
  return api.put(`/articles/${id}`, articleData);
};

// Delete an article
export const deleteArticle = (id: number): Promise<ApiResponse<void>> => {
  return apiRequest("delete", `/articles/${id}`, undefined, true);
};
