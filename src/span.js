import { Element } from "./Element.js";

/**
 * Creates a 'span' element.
 * @param  {...any} entries array of property objects or nodes to add to this element.
 * @returns the created element.
 */
export const span = (...entries) => {
    const defaultProps = {
        className: "+span"
    };

    return Element(document.createElement("span"), defaultProps, ...entries);
}
