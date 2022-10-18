import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "@/views/Home/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { isHideFooter: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Login/index.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: { isHideFooter: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Register/index.vue"),
  },
  {
    path: "/search/:keywords?",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Search/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
