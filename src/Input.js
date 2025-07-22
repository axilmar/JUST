import { HTMLInputElement } from "./HTMLInputElement.js";

export const Input = (...entries) => {
    const defaultProps = {
        className: "Element HTMLElement HTMLInputElement Input",
        type: "text"
    };

    return HTMLInputElement(document.createElement("input"), defaultProps, ...entries);
}
