import { HTMLElement } from "./HTMLElement.js";

export const Span = (...entries) => {
    const defaultProps = {
        className: "Element HTMLElement Span"
    };

    return HTMLElement(document.createElement("span"), defaultProps, ...entries);
}
