import Vue from "vue";
import VueRouter from "vue-router";
import ModifyList from "./ModifyList/ModifyList.vue";
import TodosList from "./TodosList/TodosList.vue";
import DoneList from "./DoneList/DoneList.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", component: ModifyList },
    { path: "/todo", component: TodosList },
    { path: "/done", component: DoneList }
  ]
});

export default router;
