import { DropDown } from ".";
import { idFinder, classFinder, useTree, setUp } from "test";

describe("DropDown", () => {
  let component;
  beforeEach(
    () =>
      (component = setUp(DropDown, {
        active: true,
        children: <p className="drop-down-test">test</p>,
      }))
  );
  it("SHOUD Match <DropDownOption/> TO SNAPSHOT", () => {
    let dropDown = useTree(DropDown);
    expect(dropDown).toMatchSnapshot();
  });
  it("SHOULD RENDER WRAPPER", () => {
    const wrapper = idFinder(component, "drop-down");
    expect(wrapper.length).toBe(1);
  });
  it("SHOULD RENDER ARROW UP ICON WHEN IS ACTIVE", () => {
    const icon = idFinder(component, "arrow-up");
    expect(icon.length).toBe(1);
  });
  it("SHOULD RENDER CHILDREN", () => {
    const icon = classFinder(component, ".drop-down-test");
    expect(icon).toHaveLength(1);
  });
  //   it("SHOUD RENDER OPEN ICON BEFORE CLICK", () => {
  //     const button = idFinder(component, "button");
  //     const arrowUp = idFinder(component, "arrow-up");
  //     expect(button).toHaveLength(1);
  //     //button.simulate("click");
  //     button.props().onClick();
  //     expect(arrowUp).toHaveLength(1);
  //   });
});
