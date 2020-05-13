import { shallowMount } from "@vue/test-utils";
import ModifyList from "../ModifyList/ModifyList.vue";
import TodoList from "@/components/TodoList.vue";

describe("ModifyList", () => {
  const wrapper = shallowMount(ModifyList);

  it("render TodoList with correct props", () => {
    const todoListComponent = wrapper.find(TodoList);
    expect(todoListComponent.props('listName')).toBe('Create and Modify Todos');
    expect(todoListComponent.props('listType')).toBe('editable');
  });

});
