import { createRouter, createWebHashHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const JobReasultView = () =>
  import(/* webpackChunkName: "jobs" */ "@/views/JobReasultView.vue");
const JobView = () => import(/* webpackChunkName: "jobs" */ "@/views/JobView");

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
