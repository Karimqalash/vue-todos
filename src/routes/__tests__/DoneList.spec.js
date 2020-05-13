import { shallowMount } from "@vue/test-utils";
import DoneList from "../DoneList/DoneList.vue";
import TodoList from "@/components/TodoList.vue";

describe("DoneList", () => {
  const wrapper = shallowMount(DoneList);

  it("render TodoList with correct props", () => {
    const todoListComponent = wrapper.find(TodoList);
    expect(todoListComponent.props('listName')).toBe('Done Todos');
    expect(todoListComponent.props('listType')).toBe('done');
  });

});
