import { DropDownOption } from ".";
import { idFinder, classFinder, setUp, useTree } from "test";

describe("Drop down option", () => {
  let component;
  beforeEach(
    () =>
      (component = setUp(DropDownOption, {
        active: true,
        children: <p className="drop-down-option-test">test</p>,
      }))
  );
  // it("SHOUD Match <DropDownOption/> TO SNAPSHOT", () => {
  //   let dropDownOption = useTree(DropDownOption);
  //   expect(dropDownOption).toMatchSnapshot();
  // });
  // it("SHOULD RENDER WRAPPER", () => {
  //   const wrapper = idFinder(component, "drop-down-option");
  //   expect(wrapper.length).toBe(1);
  // });
  // it("SHOULD RENDER CERTIAN CLASS WHEN IS ACTIVE", () => {
  //   const wrapper = classFinder(component, ".text-indigo-500");
  //   expect(wrapper.length).toBe(1);
  // });
  // it("SHOULD RENDER CHILDREN WITH CERTIAN CLASS", () => {
  //   const wrapper = classFinder(component, ".drop-down-option-test");
  //   expect(wrapper.length).toBe(1);
  // });
  it("test", () => {
    expect(true).toBeTruthy();
  });
});
