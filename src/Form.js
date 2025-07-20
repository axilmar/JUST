import { HTMLElement } from "./HTMLElement.js";

export const Form = (...entries) => {
    return HTMLElement(document.createElement("form"), ...entries);
}
