<template>
  <div class="container">
    <div class="row">
      <div class="col-12 py-5">
        <h2>{{ listName }}</h2>
      </div>
    </div>
    <div class="row mb-3" v-show="listType === 'editable'">
      <create-todo @on-new-todo="addTodo($event)" />
    </div>
    <div class="row">
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group">
          <todo
            v-for="(todo, index) in showTodo"
            :key="index"
            :description="todo.description"
            :completed="todo.completed"
            :isEditable="listType === 'editable'"
            @on-toggle="toggleTodo(todo)"
            @on-delete="deleteTodo(todo)"
            @on-edit="editTodo(todo, $event)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import CreateTodo from "./CreateTodo.vue";

export default {
  props: {
    listName: String,
    listType: String
  },
  computed: {
    showTodo: function() {
      switch (this.listType) {
        case "todo":
          return this.todos.filter(todo => !todo.completed);
        case "done":
          return this.todos.filter(todo => todo.completed);
        default:
          return this.todos;
      }
    }
  },
  mounted() {
    if (localStorage.getItem("todos")) {
      try {
        this.todos = JSON.parse(localStorage.getItem("todos"));
      } catch (e) {
        localStorage.removeItem("todos");
      }
    }
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push({ description: newTodo, completed: false });
      this.updateStorage();
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
      this.updateStorage();
    },
    deleteTodo(deletedTodo) {
      this.todos = this.todos.filter(todo => todo !== deletedTodo);
      this.updateStorage();
    },
    editTodo(todo, newTodoDescription) {
      todo.description = newTodoDescription;
      this.updateStorage();
    },
    updateStorage() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem("todos", parsed);
    }
  },
  components: { Todo, CreateTodo }
};
</script>

<style scoped lang="scss"></style>
