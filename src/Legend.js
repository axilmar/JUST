import { HTMLElement } from "./HTMLElement.js";

export const Legend = (...entries) => {
    const defaultProps = {
        className: "Element HTMLElement Legend"
    };

    return HTMLElement(document.createElement("legend"), defaultProps, ...entries);
}
