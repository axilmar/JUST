import { HTMLElement } from "./HTMLElement.js";

export const Label = (...entries) => {
    return HTMLElement(document.createElement("label"), ...entries);
}
