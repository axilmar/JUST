import { Node } from "./Node.js";
import { isElement } from "./util.js";

export const Element = (element, ...entries) => {
    console.assert(isElement(element), "JUST: Element(): 'element' not an instance of 'Element'.");
    return Node(element, ...entries);
}
