import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Warlock from "../views/Warlock.vue";
import Hunter from "../views/Hunter.vue";
import Titan from "../views/Titan.vue";
import Auth from "../views/Auth.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/warlock",
    name: "Warlock",
    component: Warlock
  },
  {
    path: "/hunter",
    name: "Hunter",
    component: Hunter
  },
  {
    path: "/titan",
    name: "Titan",
    component: Titan
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
