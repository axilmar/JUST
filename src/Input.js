import { HTMLInputElement } from "./HTMLInputElement.js";

export const Input = (...entries) => {
    const defaultProps = {
        type: "text"
    };
    return HTMLInputElement(document.createElement("input"), defaultProps, ...entries);
}
