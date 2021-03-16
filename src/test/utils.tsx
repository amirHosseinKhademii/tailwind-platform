import { shallow } from "enzyme";
import { renderHook } from "@testing-library/react-hooks";

const setUp = (Component, props) => shallow(<Component {...props} />);
const shallowFinder = (component, attr) => component.find(`[id='${attr}']`);
const itif = (condition) => (condition ? it : it.skip);
const useHook = (hook) => renderHook(() => hook());

export { shallowFinder, itif, useHook, setUp };
