import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobReasultView from "@/views/JobReasultView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/jobs/reasult",
    name: "about",
    component: JobReasultView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
