import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home", //optional
    component: HomeView,
  },
  {
    path: "/books",
    name: "books",
    component: () => import("../views/BooksView.vue"), //lazy loading
  },
  {
    path: "/books/:id",
    name: "booksDetail",
    component: () => import("../views/BooksDetailView.vue"), //lazy loading
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/imprint",
    name: "imprint",
    component: () =>
      import(/* webpackChunkName: "imprint" */ "../views/ImprintView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
