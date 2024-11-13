import { createApp } from "vue";
import "./shared/styles/global.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "./App.vue";
import router from "./router"; // Import your router

createApp(App)
  .use(router) // Use the router
  .mount("#app");
