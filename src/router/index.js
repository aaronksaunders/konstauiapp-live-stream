import { createRouter, createWebHistory } from "vue-router";
import TabRoot from "../views/TabRoot.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import DetailView from "../views/DetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/tabs/home",
    },
    {
      path: "/tabs",
      component: TabRoot,
      name: "tabs",
      children: [
        {
          path: "home-detail",
          name: "home-detail",
          components: {
            default: TabRoot,
            tabs: DetailView
          },
        },
        {
          path: "home",
          name: "home",
          components: {
            default: TabRoot,
            tabs: HomeView,
          }
        },
        {
          path: "about",
          name: "about",

          components: {
            default: TabRoot,
            tabs: AboutView,
          },
        },
      ],
    },
  ],
});

export default router;
