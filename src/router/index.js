import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/",
    name: "homeLogin",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: () => import("../views/cadastro.vue"),
  },
  {
    path: "/contato",
    name: "contato",
    component: () => import("../views/contato.vue"),
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("../views/menu.vue"),
  },
  {
    path: "/usuario",
    name: "usuario",
    component: () => import("../views/usuario.vue"),
  },
  {
    path: "/pessoas",
    name: "pessoas",
    component: () => import("../views/pessoas.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (
    to.name !== "login" &&
    !localStorage.resultLogin &&
    !sessionStorage.resultLogin
  ) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
