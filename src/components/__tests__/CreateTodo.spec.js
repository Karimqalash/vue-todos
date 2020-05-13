import { shallowMount } from "@vue/test-utils";
import CreateTodo from "../CreateTodo.vue";

describe("CreateTodo", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(CreateTodo);
  });

  it("emit on-new-todo when input value is set", () => {
    wrapper.find('input').setValue('task');
    wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.emitted("on-new-todo")[0]).toStrictEqual(['task']);
  });

  it("doesn't emit on-new-todo when no input value is set", () => {
    wrapper.find('input').setValue('');
    wrapper.find('form').trigger('submit.prevent');
    expect(wrapper.emitted("on-new-todo")).toBeFalsy();
  });

});
