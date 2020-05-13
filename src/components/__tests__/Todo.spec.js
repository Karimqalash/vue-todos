import { shallowMount } from "@vue/test-utils";
import Todo from "../Todo.vue";

describe("Todo", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Todo, {
      propsData: {
	        description: "todo",
	        isEditable: true
        },
        data(){
                return {
                    isEditing: true
                }
            }
    });
  });

  const finishEditing = jest.fn();
  const startEditing = jest.fn();

  it("emit on-edit on submit form", () => {
    wrapper.find("form").trigger('submit.prevent');

    expect(wrapper.emitted("on-edit")).toBeTruthy();
  });

  it("startEditing function correctly when isEditing false", () => {
	wrapper.setData({
	  isEditing: false
    });
    wrapper.vm.startEditing();
    expect(wrapper.vm.newTodoDescription).toEqual(wrapper.vm.description);
    expect(wrapper.vm.isEditing).toBe(true);
  });

  it("calls finishEditing when isEditing true", () => {
    wrapper.setMethods({
      finishEditing: finishEditing
    });
    wrapper.vm.startEditing();
    expect(finishEditing).toHaveBeenCalled();
  });

  it("emits on-delete on delete-btn click", () => {
    wrapper.find("#delete-btn").trigger("click");
    expect(wrapper.emitted("on-delete")).toBeTruthy();
  });
});
