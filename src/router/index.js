import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      visible: true,
    },
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: {
      visible: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/detail",
    name: "Detail",
    meta: {
      visible: false,
    },
    component: () => import("../views/ArticleDetail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
