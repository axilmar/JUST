import { HTMLElement } from "./HTMLElement.js";

/**
 * Creates a 'fieldset' element.
 * @param  {...any} entries array of property objects or nodes to add to this element.
 * @returns the created element.
 */
export const fieldset = (...entries) => {
    const defaultProps = {
        className: "+fieldset"
    };

    return HTMLElement(document.createElement("fieldset"), defaultProps, ...entries);
}
