import { EventTarget } from "./EventTarget.js";
import { isString, isNode, isElement, isHTMLElement } from "./util.js";

export const Node = (node, ...entries) => {
    EventTarget(node);

    console.assert(isNode(node), "JUST: Node(): 'node' not an instance of 'Node'.");

    //iterate entries
    for(const entry of entries) {
        //if entry is node, append it as a child
        if (isNode(entry)) {
            node.appendChild(entry);
        }

        //else if entry is a string, append it as a text node
        else if (isString(entry)) {
            node.appendChild(document.createTextNode(entry));
        }

        //else set properties from entry
        else {
            const isElementValue = isElement(node);
            const isHTMLElementValue = isHTMLElement(node);

            //iterate properties of entry
            for(const propertyName in entry) {
                const propertyValue = entry[propertyName]; 

                //add class name if class name is prefixed with '+'
                if (propertyName === "className" && isElement(node) && propertyValue.startsWith('+')) {
                    node.classList.add(propertyValue.substring(1));
                    continue;
                }

                //set html element style from property object
                if (propertyName === "style" && isHTMLElement(node) && !isString(propertyValue)) {
                    for(const stylePropertyName in propertyValue) {
                        node.style[stylePropertyName] = propertyValue[stylePropertyName];
                    }
                    continue;
                }

                //otherwise set normal property
                node[propertyName] = propertyValue;
            }
        }
    }

    return node;
}
