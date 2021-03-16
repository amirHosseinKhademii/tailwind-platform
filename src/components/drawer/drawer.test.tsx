import { Drawer } from "components";
import { shallowFinder, useHook, setUp } from "test";
import { useDrawer } from "./use-drawer";

const hook = useHook(useDrawer);

describe("Drawer", () => {
  let component;
  beforeEach(() => (component = setUp(Drawer, {})));

  it("SHOULD RENDER DRAWER WITHOUT ERROR", () => {
    const drawer = shallowFinder(component, "drawer");
    expect(drawer.length).toBe(1);
  });

  it("SHOULD RENDER MENU ICON WITHOUT ERROR", () => {
    const menu = shallowFinder(component, "menu");
    expect(menu.length).toBe(1);
  });

  it("SHOULD BE False", () => {
    expect(hook.result.current.open).toBe(false);
  });
});
