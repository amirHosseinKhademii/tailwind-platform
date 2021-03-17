import { Drawer } from "components";
import { shallowFinder, useHook, setUp, useTree } from "test";
import { useDrawer } from "./use-drawer";

const hook = useHook(useDrawer);

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
