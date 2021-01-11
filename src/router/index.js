import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Warlock from "../views/Warlock.vue";
import Hunter from "../views/Hunter.vue";
import Titan from "../views/Titan.vue";

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
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
