import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Member",
    component: () => import("../page/Member.vue"),
  },
  {
    path: "/registermember",
    name: "RegisterMember",
    component: () => import("../page/RegisterMember.vue"),
  },
  
  
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
