import { Element } from "./Element.js";
import { isHTMLElement } from "./util.js";

export const HTMLElement = (htmlElement, ...entries) => {
    console.assert(isHTMLElement(htmlElement), "JUST: HTMLElement(): 'htmlElement' not an instance of 'HTMLElement'.");

    const defaultProps = {
        className: "+HTMLElement",
        style: {
            overflow: "hidden"
        }        
    };

    return Element(htmlElement, defaultProps, ...entries);
}
