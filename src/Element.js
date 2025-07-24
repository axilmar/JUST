import { isString, isNode, isElement, isHTMLElement } from "./util.js";

/**
 * Base element constructor.
 * @param {Element} element the element to set the properties of and children.
 * @param {...any} entries array of property objects or nodes to add to this element.
 *  Special properties:
 *      -className: if a '+' is set before the class name, then the class name is added to the existing class names.
 *      -parent: it adds the given element to the given parent.
 *      -style: it sets the html style property from an object that contains key-value pairs.
 * @returns the given element.
 */
export const Element = (element, ...entries) => {
    console.assert(isElement(element), "JUST: Element(): 'element' not an instance of 'Element'.");

    //iterate entries
    for(const entry of entries) {
        //if entry is node or string, append it as a child
        if (isNode(entry) || isString(entry)) {
            element.append(entry);
            continue;
        }

        const isElementValue = isElement(element);
        const isHTMLElementValue = isHTMLElement(element);

        //iterate properties of entry
        for(const propertyName in entry) {
            const propertyValue = entry[propertyName]; 

            //add class name if class name is prefixed with '+'
            if (propertyName === "className" && isElementValue && propertyValue.startsWith('+')) {
                element.classList.add(propertyValue.substring(1));
                continue;
            }

            //special property parent to add the node into another node
            if (propertyName === "parent") {
                propertyValue.appendChild(element);
                continue;
            }

            //set html element style from property object
            if (propertyName === "style" && isHTMLElementValue && !isString(propertyValue)) {
                for(const stylePropertyName in propertyValue) {
                    element.style[stylePropertyName] = propertyValue[stylePropertyName];
                }
                continue;
            }

            //otherwise set normal property
            element[propertyName] = propertyValue;
        }
    }

    return element;
}
