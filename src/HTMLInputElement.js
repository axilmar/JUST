import { HTMLElement } from "./HTMLElement.js";
import { isHTMLInputElement } from "./util.js";

export const HTMLInputElement = (htmlInputElement, ...entries) => {
    console.assert(isHTMLInputElement(htmlInputElement), "JUST: HTMLInputElement(): 'htmlInputElement' not an instance of 'HTMLInputElement'.");
    return HTMLElement(htmlInputElement, ...entries);
}
