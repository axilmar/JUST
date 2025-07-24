import { HTMLElement } from "./HTMLElement.js";

export const legend = (...entries) => {
    const defaultProps = {
        className: "+legend"
    };

    return HTMLElement(document.createElement("legend"), defaultProps, ...entries);
}
