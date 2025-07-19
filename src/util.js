/**
 * Checks if the given object is a string.
 * @param {*} v the object to check if it is a string.
 * @returns true if it is a string, false otherwise.
 */
export const isString = (v) => v instanceof String || typeof v === "string";

/**
 * Checks if the given object is an instance of EventTarget.
 * @param {*} v the object to check if it is an instance of EventTarget.
 * @returns true if it is an instance of EventTarget, false otherwise.
 */
export const isEventTarget = (v) => v instanceof EventTarget;

/**
 * Checks if the given object is an instance of Node.
 * @param {*} v the object to check if it is an instance of Node.
 * @returns true if it is an instance of Node, false otherwise.
 */
export const isNode = (v) => v instanceof Node;

/**
 * Checks if the given object is an instance of Element.
 * @param {*} v the object to check if it is an instance of Element.
 * @returns true if it is an instance of Element, false otherwise.
 */
export const isElement = (v) => v instanceof Element;

/**
 * Checks if the given object is an instance of HTMLElement.
 * @param {*} v the object to check if it is an instance of HTMLElement.
 * @returns true if it is an instance of HTMLElement, false otherwise.
 */
export const isHTMLElement = (v) => v instanceof HTMLElement;
