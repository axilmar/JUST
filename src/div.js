import { HTMLElement } from "./HTMLElement.js";

/**
 * Creates a 'div' element.
 * @param  {...any} entries array of property objects or nodes to add to this element.
 * @returns the created element.
 */
export const div = (...entries) => {

    const defaultProps = {
        className: "+div",
        style: {
            "box-sizing": "border-box"
        }
    };

    return HTMLElement(document.createElement("div"), defaultProps, ...entries);
}
