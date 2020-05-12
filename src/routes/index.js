import Vue from "vue";
import VueRouter from "vue-router";
import TodoList from "../components/TodoList.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{ path: "/", component: TodoList }]
});

export default router;
