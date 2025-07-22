import { Node } from "./Node.js";
import { isElement } from "./util.js";

export const Element = (element, ...entries) => {
    console.assert(isElement(element), "JUST: Element(): 'element' not an instance of 'Element'.");

    const defaultProps = {
        className: "Element"
    };

    return Node(element, defaultProps, ...entries);
}
