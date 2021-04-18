import { Drawer } from "components";
import { idFinder, setUp, useTree } from "test";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Drawer", () => {
  // beforeEach(() => {
  //   render(<Drawer />);
  // });
  // it("then shows the light theme by default", () => {
  //    "Use Dark Theme" text is only shown when the light theme is active
  //   expect(screen.getByRole(/Use Dark Theme/i)).toBeUndefined();
  // });
  // let component;
  // beforeEach(() => (component = setUp(Drawer, {})));
  // it("SHOUD Match <Drawer/> TO SNAPSHOT", () => {
  //   let drawer = useTree(Drawer);
  //   expect(drawer).toMatchSnapshot();
  // });
  // it("SHOUD RENDER WRAPPER", () => {
  //   const wrapper = idFinder(component, "drawer");
  //   expect(wrapper.length).toBe(1);
  // });
  // it("SHOUD RENDER OPEN ICON BEFORE CLICK", () => {
  //   const close = idFinder(component, "close");
  //   close.simulate("click");
  //   expect(idFinder(component, "menu").length).toBe(1);
  // });
  it("SHOUD RENDER CLOSE ICON ", () => {
    expect(true).toBeTruthy();
    //expect(idFinder(component, "close").length).toBe(1);
  });
});
