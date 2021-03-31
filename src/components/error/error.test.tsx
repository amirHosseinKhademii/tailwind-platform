import { Error } from ".";
import { idFinder, useTree, setUp } from "test";

describe("Error", () => {
  let component;
  beforeEach(() => (component = setUp(Error, { error: "test" })));
  it("SHOULD MATCH SNAPSHOT", () => {
    let error = useTree(Error);
    expect(error).toMatchSnapshot();
  });
  it("SHOULD RENDER WRAPPER", () => {
    const wrapper = idFinder(component, "error");
    expect(wrapper).toHaveLength(1);
  });
  it("SHOULD RENDER NOTHING WHEN PROPS IS UNDEFINED", () => {
    const wrapper = idFinder(setUp(Error, {}), "error");
    expect(wrapper).toHaveLength(0);
  });
});
