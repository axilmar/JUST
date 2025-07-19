import { Object } from "./Object.js";
import { isEventTarget } from "./util.js";

export const EventTarget = (eventTarget) => {
    console.assert(isEventTarget(eventTarget), "JUST: EventTarget(): 'eventTarget' not an instance of 'EventTarget'.");
    return Object(eventTarget);
}
