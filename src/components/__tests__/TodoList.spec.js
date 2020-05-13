import { shallowMount } from "@vue/test-utils";
import TodoList from "../TodoList.vue";

describe("TodoList", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TodoList, {
      propsData: {
        listType: "editable",
        listName: "Modify todos"
      }
    });
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("invokes adds todos", () => {
    wrapper.vm.addTodo("todo");
  
    expect(wrapper.vm.todos).toStrictEqual([{ description: "todo", completed: false }]);
  });

  it("invokes removes todo", () => {
    
    wrapper.setData({
      todos: [{ description: "todo", completed: false }]
    });

    wrapper.vm.deleteTodo(wrapper.vm.todos[0]);

    expect(wrapper.vm.todos).toStrictEqual([]);
  });

  it("invokes edits todo", () => {

    wrapper.setData({
      todos: [{ description: "test todo", completed: false }]
    });

    wrapper.vm.editTodo(wrapper.vm.todos[0], "done");

    expect(wrapper.vm.todos).toStrictEqual([{ description: "done", completed: false }]);
  });

  it("invokes toggles todo", () => {

    wrapper.setData({
      todos: [{ description: "todo", completed: false }]
    });

    wrapper.vm.toggleTodo(wrapper.vm.todos[0]);

    expect(wrapper.vm.todos).toStrictEqual([{ description: "todo", completed: true }]);
  });
});
