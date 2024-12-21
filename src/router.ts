import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@/views/Home/Home.vue";
import BlogPage from "@/views/Blog/Blog.vue";
import BlogDetail from "@/views/BlogDetail/BlogDetail.vue";
import Articles from "@/views/Articles/Articles.vue";
import Aboutme from "@/views/Aboutme/Aboutme.vue";
import Contact from "@/views/Contact/Contact.vue";
import AdminView from "@/views/Admin/Admin.vue";
import LoginView from "@/views/Admin/components/LoginPage.vue";
import { getCookie } from "./shared/utils";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: HomePage },
  { path: "/blog", component: BlogPage },
  { path: "/blog/:post_id", component: BlogDetail, props: true },
  { path: "/articles", component: Articles },
  { path: "/about", component: Aboutme },
  { path: "/contact", component: Contact },
  {
    path: "/admin",
    component: AdminView,
    beforeEnter: (to, from, next) => {
      const accessToken = getCookie("accessToken");
      if (accessToken) {
        next();
      } else {
        next("/admin-login");
      }
    },
  },
  {
    path: "/admin-login",
    component: LoginView,
    beforeEnter: (to, from, next) => {
      const accessToken = getCookie("accessToken");
      if (accessToken) {
        next("/admin");
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
