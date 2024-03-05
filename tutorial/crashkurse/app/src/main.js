import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHashHistory } from "vue-router";
import { createStore } from "vuex";

import CompOne from "./components/CompOne";
import CompTwo from "./components/CompTwo";
import CompThree from "./components/CompThree";

const app = createApp(App);
const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state, number) {
      state.count = state.count + number;
    },
  },
});
const routes = [
  { path: "/", component: CompOne },
  { path: "/compTwo", component: CompTwo },
  { path: "/compThree", component: CompThree },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  linkActiveClass: "active",
});

app.use(store);
app.use(router);

app.mount("#app");
