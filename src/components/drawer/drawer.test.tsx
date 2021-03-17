import { Drawer } from "components";
import { shallowFinder, setUp, useTree } from "test";

describe("Drawer", () => {
  let component;
  beforeEach(() => (component = setUp(Drawer, {})));

  it("SHOUD Match <Drawer/> TO SNAPSHOT", () => {
    let drawer = useTree(Drawer);
    expect(drawer).toMatchSnapshot();
  });

  it("SHOUD RENDER WRAPPER", () => {
    const wrapper = shallowFinder(component, "drawer");
    expect(wrapper.length).toBe(1);
  });

  it("SHOUD RENDER OPEN ICON BEFORE CLICK", () => {
    const close = shallowFinder(component, "close");
    close.simulate("click");
    expect(shallowFinder(component, "menu").length).toBe(1);
  });

  it("SHOUD RENDER CLOSE ICON AFTER CLICK", () => {
    expect(shallowFinder(component, "close").length).toBe(1);
  });
});
