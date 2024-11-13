import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/Home/Home.vue"; // Assuming you have a BlogPage.vue
import BlogPage from "@views/Blog/Blog.vue"; // Assuming you have a BlogPage.vue

const routes = [
  { path: "/", component: HomePage }, // Add your blog route
  { path: "/blog", component: BlogPage }, // Add your blog route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
