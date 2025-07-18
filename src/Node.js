import { EventTarget } from "./EventTarget.js";
import { isString, isNode } from "./util.js";

export const Node = (node, ...entries) => {
    EventTarget(node);

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
            const isHTMLElement = node instanceof HTMLElement;

            //iterate properties of entry
            for(const propertyName in entry) {
                const propertyValue = entry[propertyName]; 

                //if property name is 'style',
                //and the node is an html lement,
                //and the value is not a string,
                //then set separate style properties.
                if (propertyName === "style" && isHTMLElement && !isString(propertyValue)) {
                    for(const stylePropertyName in propertyValue) {
                        node.style[stylePropertyName] = propertyValue[stylePropertyName];
                    }
                }

                //else set normal property
                else {
                    node[propertyName] = propertyValue;
                }
            }
        }
    }

    return node;
}
