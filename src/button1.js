import { HTMLElement } from "./HTMLElement.js";

export const button = (...entries) => {
    const defaultProps = {
        className: "Element HTMLElement button"
    };

    return HTMLElement(document.createElement("button"), defaultProps, ...entries);
}
