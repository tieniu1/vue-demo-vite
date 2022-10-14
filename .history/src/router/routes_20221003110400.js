import HomeView from "../views/HomeView.vue";

export default [
  {
    path: "/",
    name: "todo",
    component: () => import("../views/TodoList.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },

  {
    path: "/counter",
    name: "counter",
    component: () => import("../views/Counter.vue"),
  },
  {
    path: "/title",
    name: "title",
    component: () => import("../views/Counter.vue"),
  },
];
