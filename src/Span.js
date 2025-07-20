import { HTMLElement } from "./HTMLElement.js";

export const Span = (...entries) => {
    return HTMLElement(document.createElement("span"), ...entries);
}
