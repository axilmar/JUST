/**
 * Checks if the given object is a string.
 * @param {*} v the object to check if it is a string.
 * @returns true if it is a string, false otherwise.
 */
export const isString = (v) => v instanceof String || typeof v === "string";

/**
 * Checks if the given object is an instance of Node.
 * @param {*} v the object to check if it is an instance of Node.
 * @returns true if it is an instance of Node, false otherwise.
 */
export const isNode = (v) => v instanceof Node;
