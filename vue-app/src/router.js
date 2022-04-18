import * as VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Methodology from "./components/Methodology";
import BarChart from "./components/BarChart.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/methodology", component: Methodology },
  { path: "/chart", component: BarChart },
];
export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
