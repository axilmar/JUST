import { HTMLElement } from "./HTMLElement.js";

export const div = (...entries) => {

    const defaultProps = {
        className: "+div",
        style: {
            "box-sizing": "border-box"
        }
    };

    return HTMLElement(document.createElement("div"), defaultProps, ...entries);
}
