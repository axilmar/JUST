import { HTMLElement } from "./HTMLElement.js";

export const FieldSet = (...entries) => {
    const defaultProps = {
        className: "Element HTMLElement FieldSet"
    };

    return HTMLElement(document.createElement("fieldset"), defaultProps, ...entries);
}
