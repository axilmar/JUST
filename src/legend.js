import { Element } from "./Element.js";

/**
 * Creates a 'legend' element.
 * @param  {...any} entries array of property objects or nodes to add to this element.
 * @returns the created element.
 */
export const legend = (...entries) => {
    const defaultProps = {
        className: "+legend"
    };

    return Element(document.createElement("legend"), defaultProps, ...entries);
}
