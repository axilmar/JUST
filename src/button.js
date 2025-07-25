import { Element } from "./Element.js";

/**
 * Creates a 'button' element.
 * @param  {...any} entries array of property objects or nodes to add to this element.
 * @returns the created element.
 */
export const button = (...entries) => {
    const defaultProps = {
        className: "+button"
    };

    return Element(document.createElement("button"), defaultProps, ...entries);
}
