import { shallowMount } from "@vue/test-utils";
import Navbar from "../Navbar.vue";

describe("Navbar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Navbar, {
      stubs: ["router-link"]
    });
  });

  it("renders correctly", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it("has 3 items", () => {
    expect(wrapper.findAll(".nav-item").length).toEqual(3);
  });

  it("all items has a link", () => {
    const navItems = wrapper.findAll(".nav-item");
    expect(navItems.contains(".nav-link")).toBeTruthy();
  });
});
