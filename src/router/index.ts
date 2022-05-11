import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/index.vue";
import Login from "../views/auth/login.vue";
import Register from "../views/auth/register.vue";
import Forgot from "../views/auth/forgot.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/forgot",
    component: Forgot,
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
