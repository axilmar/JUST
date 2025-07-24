import { HTMLElement } from "./HTMLElement.js";

export const fieldset = (...entries) => {
    const defaultProps = {
        className: "+fieldset"
    };

    return HTMLElement(document.createElement("fieldset"), defaultProps, ...entries);
}
