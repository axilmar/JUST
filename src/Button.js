import { HTMLElement } from "./HTMLElement.js";

export const Button = (...entries) => {
    const defaultProps = {
        className: "Element HTMLElement Button"
    };

    return HTMLElement(document.createElement("button"), defaultProps, ...entries);
}
