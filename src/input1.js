import { HTMLInputElement } from "./HTMLInputElement.js";

export const input = (...entries) => {
    const defaultProps = {
        className: "Element HTMLElement HTMLInputElement input",
        type: "text"
    };

    return HTMLInputElement(document.createElement("input"), defaultProps, ...entries);
}
