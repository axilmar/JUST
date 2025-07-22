import { HTMLElement } from "./HTMLElement.js";

export const form = (...entries) => {
    const defaultProps = {
        className: "Element HTMLElement form"
    };

    return HTMLElement(document.createElement("form"), defaultProps, ...entries);
}
