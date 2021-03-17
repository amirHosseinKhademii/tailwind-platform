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

  it("OPEN SHOULD BE False INITIALY", () => {
    expect(hook.result.current.open).toBe(false);
  });

  it("SHOUD RENDER WRAPPER", () => {
    const wrapper = shallowFinder(component, "drawer");
    expect(wrapper.length).toBe(1);
  });

  it("SHOUD RENDER OPEN ICON BEFORE CLICK", () => {
    const menu = shallowFinder(component, "menu");
    expect(menu.length).toBe(1);
    expect(shallowFinder(component, "close").length).toBe(0);
  });

  it("SHOUD RENDER CLOSE ICON AFTER CLICK", () => {
    const menu = shallowFinder(component, "menu");
    menu.simulate("click");
    expect(shallowFinder(component, "close").length).toBe(1);
  });
});
