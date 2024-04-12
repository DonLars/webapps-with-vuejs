import { createRouter, createWebHashHistory } from "vue-router";
import About from "../src/components/About.vue";
import HelloWorld from "../src/components/HelloWorld.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: HelloWorld,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default router;
