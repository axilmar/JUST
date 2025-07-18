import { Div } from "../src/div.js";

const div1 = Div({style:{width: "320px", height: "200px", backgroundColor: "yellow"}},
    Div({style:{width: "64px", height: "32px", backgroundColor: "cyan"}}),
    "some text");

document.body.append(div1);
