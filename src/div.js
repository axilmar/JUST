import { HTMLElement } from "./HTMLElement.js";

export const Div = (...entries) => {

    const defaultProps = {
        className: "Element HTMLElement Div",
        style: {
            "box-sizing": "border-box"
        }
    };

    return HTMLElement(document.createElement("div"), defaultProps, ...entries);
}
