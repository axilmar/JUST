import { HTMLElement } from "./HTMLElement.js";

export const div = (...entries) => {

    const defaultProps = {
        className: "Element HTMLElement div",
        style: {
            "box-sizing": "border-box"
        }
    };

    return HTMLElement(document.createElement("div"), defaultProps, ...entries);
}
