
import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/views/Home/Home.vue'
import BlogPage from '@/views/Blog/Blog.vue'
import BlogDetail from '@/views/BlogDetail/BlogDetail.vue'
import Articles from '@/views/Articles/Articles.vue'
import Aboutme from '@/views/Aboutme/Aboutme.vue'
import Contact from '@/views/Contact/Contact.vue'

const routes = [
  { path: "/", component: HomePage },
  { path: "/blog", component: BlogPage },
  { path: "/blog/:post_id", component: BlogDetail, props: true },
  { path: "/articles", component: Articles },
  { path: "/about", component: Aboutme },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
