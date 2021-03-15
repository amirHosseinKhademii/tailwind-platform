const shallowFinder = (component, attr) => component.find(`[test='${attr}']`);

export { shallowFinder };
