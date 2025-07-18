import { div } from "../src/div.js";

const myDiv = (properties, ...children) => {
    const myProperties = {
        style: {
            display: "flex"
        }
    }
    return div([myProperties, properties], ...children);
}

const div1 = myDiv({style: { backgroundColor: "red", width: "256px", height: "256px" }}, 
    div({style: { backgroundColor: "green", width: "64px", height: "64px" }}),
    "some text");

document.body.append(div1);
