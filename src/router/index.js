import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import PasswordRecover from "../views/PasswordRecover.vue";
import GetPro from "../views/GetPro.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: '/login'
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/password-recover",
    name: "PasswordRecover",
    component: PasswordRecover,
  },
  {
    path: "/get-pro",
    name: "GetPro",
    component: GetPro,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
