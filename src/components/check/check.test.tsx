import { setUp, slotFinder } from "test";
import { Check } from ".";

describe("Check", () => {
  let component;
  beforeEach(() => {
    component = setUp(Check, {});
  });
  it("SHOULD RENDER THE WRAPPER", () => {
    const wrapper = slotFinder(component, "wrapper");
    expect(wrapper).toHaveLength(1);
  });
});
