import { shallowMount } from "@vue/test-utils";
import TodosList from "../TodosList/TodosList.vue";
import TodoList from "@/components/TodoList.vue";

describe("TodosList", () => {
  const wrapper = shallowMount(TodosList);

  it("render TodoList with correct props", () => {
    const todoListComponent = wrapper.find(TodoList);
    expect(todoListComponent.props('listName')).toBe('Todos');
    expect(todoListComponent.props('listType')).toBe('todo');
  });

});