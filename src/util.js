/**
 * Checks if the given object is a string.
 * @param {*} v the object to check if it is a string.
 * @returns true if it is a string, false otherwise.
 */
export const isString = (v) => v instanceof String || typeof v === "string";
