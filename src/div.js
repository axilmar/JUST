import { Element } from "./Element.js";

/**
 * Creates a 'div' element.
 * @param  {...any} entries array of property objects or nodes to add to this element.
 * @returns the created element.
 */
export const div = (...entries) => {

    const defaultProps = {
        className: "+div",
        style: {
            "box-sizing": "border-box",
            "overflow": "hidden"
        }
    };

    return Element(document.createElement("div"), defaultProps, ...entries);
}
