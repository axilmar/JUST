import { Element } from "./Element.js";

/**
 * Creates a 'form' element.
 * @param  {...any} entries array of property objects or nodes to add to this element.
 * @returns the created element.
 */
export const form = (...entries) => {
    const defaultProps = {
        className: "+form"
    };

    return Element(document.createElement("form"), defaultProps, ...entries);
}
