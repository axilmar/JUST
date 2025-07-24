import { Element } from "./Element.js";
import { isHTMLElement } from "./util.js";

/**
 * Base html element constructor.
 * It sets all elements to have hidden overlow, in order to better control where scrollbars appear.
 * @param {HTMLElement} element the element to set the properties of and children.
 * @param {...any} entries array of property objects or nodes to add to this element.
 * @returns the given element.
 */
export const HTMLElement = (element, ...entries) => {
    console.assert(isHTMLElement(element), "JUST: HTMLElement(): 'object' not an instance of 'HTMLElement'.");

    const defaultProps = {
        className: "+HTMLElement",
        style: {
            overflow: "hidden"
        }        
    };

    return Element(element, defaultProps, ...entries);
}
