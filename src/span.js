import { HTMLElement } from "./HTMLElement.js";

export const span = (...entries) => {
    const defaultProps = {
        className: "+span"
    };

    return HTMLElement(document.createElement("span"), defaultProps, ...entries);
}
