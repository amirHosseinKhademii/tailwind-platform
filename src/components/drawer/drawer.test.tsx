import { Drawer } from "./drawer";
import { shallow } from "enzyme";
import { shallowFinder } from "../../utils/test";

const setUp = (props = {}) => shallow(<Drawer {...props} />);

describe("Drawer", () => {
  let component;
  beforeEach(() => (component = setUp()));
  it("SHOULD RENDER WITHOUT ERROR", () => {
    const drawer = shallowFinder(component, "drawer");
    expect(drawer.length).toBe(1);
  });
});
