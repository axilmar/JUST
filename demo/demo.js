import { Div } from "../src/div.js";
import { Span } from "../src/Span.js";
import { Button } from "../src/Button.js";
import { Input } from "../src/Input.js";
import { Form } from "../src/Form.js";
import { Label } from "../src/Label.js";
import { FieldSet } from "../src/FieldSet.js";
import { Legend } from "../src/Legend.js";

const div1 = Div({style:{width: "1024px", height: "400px", backgroundColor: "yellow", fontSize: "1rem"}},
    Form(
        FieldSet(
            Legend("Form1"),
            Div({style:{width: "100%px", height: "50%", backgroundColor: "cyan"}},
                Span({id: "span1"}, "The quick brown fox"),
                Button({ onclick: () => alert("Button clicked!") }, "Click me"),
                Label("Please enter text", Input({}))
            ) //div
        ) //fieldset
    ) //form
) //div;

document.body.append(div1);
