import { Element } from "./Element.js";

/**
 * Creates a 'label' element.
 * @param  {...any} entries array of property objects or nodes to add to this element.
 * @returns the created element.
 */
export const label = (...entries) => {
    const defaultProps = {
        className: "+label"
    };

    return Element(document.createElement("label"), defaultProps, ...entries);
}
