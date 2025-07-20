import { HTMLElement } from "./HTMLElement.js";

export const Legend = (...entries) => {
    return HTMLElement(document.createElement("legend"), ...entries);
}
