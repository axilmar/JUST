import { Element } from "./Element.js";

/**
 * A div element constructor.
 * 
 * It invokes the Element constructor to set its properties and children.
 * 
 * @param {*} propertyObject property object.
 * @param  {...any} children children.
 * 
 * @returns the div element.
 */
export const div = (propertyObject, ...children) => {
    const defaultProperties = {
        style: {
            "box-sizing": "border-box"
        }
    };
    return Element(document.createElement("div"), [defaultProperties, propertyObject], ...children);
}
