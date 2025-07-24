import { HTMLElement } from "./HTMLElement.js";

/**
 * Creates a 'form' element.
 * @param  {...any} entries array of property objects or nodes to add to this element.
 * @returns the created element.
 */
export const form = (...entries) => {
    const defaultProps = {
        className: "+form"
    };

    return HTMLElement(document.createElement("form"), defaultProps, ...entries);
}
