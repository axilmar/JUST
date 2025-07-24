import { HTMLInputElement } from "./HTMLInputElement.js";

export const input = (...entries) => {
    const defaultProps = {
        className: "+input",
        type: "text"
    };

    return HTMLInputElement(document.createElement("input"), defaultProps, ...entries);
}
