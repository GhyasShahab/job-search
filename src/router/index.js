import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JobReasultView from "@/views/JobReasultView.vue";
import JobView from "@/views/JobView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/jobs/reasult",
    name: "JobReasults",
    component: JobReasultView,
  },
  {
    path: "/jobs/reasult/:id",
    name: "JobListing",
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
