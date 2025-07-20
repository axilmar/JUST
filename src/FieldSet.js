import { HTMLElement } from "./HTMLElement.js";

export const FieldSet = (...entries) => {
    return HTMLElement(document.createElement("fieldset"), ...entries);
}
