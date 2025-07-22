import { HTMLElement } from "./HTMLElement.js";

export const Form = (...entries) => {
    const defaultProps = {
        className: "Element HTMLElement Form"
    };

    return HTMLElement(document.createElement("form"), defaultProps, ...entries);
}
