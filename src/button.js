import { HTMLElement } from "./HTMLElement.js";

/**
 * Creates a 'button' element.
 * @param  {...any} entries array of property objects or nodes to add to this element.
 * @returns the created element.
 */
export const button = (...entries) => {
    const defaultProps = {
        className: "+button"
    };

    return HTMLElement(document.createElement("button"), defaultProps, ...entries);
}
