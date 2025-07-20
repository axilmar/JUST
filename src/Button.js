import { HTMLElement } from "./HTMLElement.js";

export const Button = (...entries) => {
    return HTMLElement(document.createElement("button"), ...entries);
}
