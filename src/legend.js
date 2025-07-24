import { HTMLElement } from "./HTMLElement.js";

/**
 * Creates a 'legend' element.
 * @param  {...any} entries array of property objects or nodes to add to this element.
 * @returns the created element.
 */
export const legend = (...entries) => {
    const defaultProps = {
        className: "+legend"
    };

    return HTMLElement(document.createElement("legend"), defaultProps, ...entries);
}
