import { HTMLElement } from "./HTMLElement.js";

export const label = (...entries) => {
    const defaultProps = {
        className: "Element HTMLElement label"
    };

    return HTMLElement(document.createElement("label"), defaultProps, ...entries);
}
