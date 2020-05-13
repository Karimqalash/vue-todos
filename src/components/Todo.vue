<template>
  <li class="d-flex align-items-center list-group-item">
    <div
      class="checkbox border-0 flex-grow-1 text-left shadow-none"
      @click="$emit('on-toggle')"
      v-if="!isEditing"
    >
      <input class="mr-2" type="checkbox" :checked="completed" />
      <span>{{ description }}</span>
    </div>
    <form v-else class="flex-grow-1" @submit.prevent="finishEditing()">
      <input
        type="text"
        class="form-control"
        v-model="newTodoDescription"
        @blur="finishEditing()"
        ref="newTodo"
      />
    </form>
    <div v-show="isEditable">
      <button
        @click="startEditing()"
        class="btn btn-outline-primary border-0 ml-2"
      >
        <span class="fa fa-edit"></span>
      </button>
      <button
        @click="$emit('on-delete')"
        class="btn btn-outline-danger border-0"
      >
        <span class="fa fa-trash"></span>
      </button>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      newTodoDescription: ""
    };
  },
  props: {
    isEditable: Boolean,
    description: String,
    completed: Boolean
  },
  methods: {
    startEditing() {
      if (this.isEditing) {
        this.finishEditing();
      } else {
        this.newTodoDescription = this.description;
        this.isEditing = true;
        this.$nextTick(() => this.$refs.newTodo.focus());
      }
    },
    finishEditing() {
      this.isEditing = false;
      this.$emit("on-edit", this.newTodoDescription);
    }
  }
};
</script>

<style lang="scss" scoped>
.completed {
  text-decoration: line-through;
}
</style>
