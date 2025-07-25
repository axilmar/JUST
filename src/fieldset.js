import { Element } from "./Element.js";

/**
 * Creates a 'fieldset' element.
 * @param  {...any} entries array of property objects or nodes to add to this element.
 * @returns the created element.
 */
export const fieldset = (...entries) => {
    const defaultProps = {
        className: "+fieldset"
    };

    return Element(document.createElement("fieldset"), defaultProps, ...entries);
}
