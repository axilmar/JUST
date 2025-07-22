import { HTMLElement } from "./HTMLElement.js";

export const Label = (...entries) => {
    const defaultProps = {
        className: "Element HTMLElement Label"
    };

    return HTMLElement(document.createElement("label"), defaultProps, ...entries);
}
