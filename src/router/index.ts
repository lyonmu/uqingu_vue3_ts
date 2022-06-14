import { createRouter, createWebHistory } from "vue-router";
import SiteIndexVue from "../pages/SiteIndex.vue";
import AboutVue from "../pages/About.vue";

const Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: SiteIndexVue,
    },
    {
      path: "/aboutme",
      component: AboutVue,
    },
  ],
});
export default Router;
