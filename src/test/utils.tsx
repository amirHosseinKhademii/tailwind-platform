import { shallow } from "enzyme";
import { renderHook } from "@testing-library/react-hooks";
import renderer from "react-test-renderer";

const setUp = (Component, props) => shallow(<Component {...props} />);

const shallowFinder = (component, attr) => component.find(`[id='${attr}']`);

const itif = (condition) => (condition ? it : it.skip);

const useHook = (hook, initialState?: any) =>
  renderHook(() => hook(initialState));

const useTree = (Component) => {
  const instance = renderer.create(<Component />);
  return instance.toJSON();
};

export { shallowFinder, itif, useHook, setUp, useTree };
