import { Object } from "./Object.js";

/**
 * Element constructor.
 * 
 * It invokes the Object constructor to set its properties.
 * It adds the given children to to it.
 * 
 * @param {*} element target element.
 * @param {*} propertyObject property object.
 * @param  {...any} children array of children to add to this.
 * 
 * @returns the element.
 */
export const Element = (element, propertyObject, ...children) => {
    Object(element, propertyObject);
    element.append(...children);
    return element;
}
