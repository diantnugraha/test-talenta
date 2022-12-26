import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AddTodo from "../views/AddTodo.vue";
import EditTodo from "../views/EditTodo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/add",
      name: "add",
      component: AddTodo,
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditTodo,
    },
  ],
});

export default router;
