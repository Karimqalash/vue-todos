import { shallowMount } from "@vue/test-utils";
import DefaultLayout from "../DefaultLayout.vue";
import Navbar from "@/components/Navbar.vue";

describe("DefaultLayout", () => {
let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(DefaultLayout, {
      stubs: ["router-view"]
    });
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("render Navbar correctly", () => {
    expect(wrapper.find(Navbar)).toBeTruthy();
  });

  it("render router-view correctly", () => {
    expect(wrapper.find('router-view')).toBeTruthy();
  });
});
