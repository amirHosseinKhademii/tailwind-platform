const shallowFinder = (component, attr) => component.find(`[id='${attr}']`);

export { shallowFinder };
