import { Element } from "./Element.js";

export const HTMLElement = (htmlElement, ...entries) => {
    const defaultProps = {
        style: {
            overflow: "hidden"
        }
    };
    return Element(htmlElement, defaultProps, ...entries);
}
