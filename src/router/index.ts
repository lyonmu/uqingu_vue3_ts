import { createRouter, createWebHistory } from "vue-router";
import SiteIndexVue from "../pages/SiteIndex.vue";

const Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: SiteIndexVue,
    },
  ],
});
export default Router;
