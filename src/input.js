import { Element } from "./Element.js";

/**
 * Creates an 'input' element.
 * @param  {...any} entries array of property objects or nodes to add to this element.
 * @returns the created element.
 */
export const input = (...entries) => {
    const defaultProps = {
        className: "+input",
        type: "text"
    };

    return Element(document.createElement("input"), defaultProps, ...entries);
}
