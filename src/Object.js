import "./init.js";
import { isString } from "./util.js";

const setElementStyle = (object, style) => {
    if (isString(style)) {
        object.style = style;
    }
    else {
        for(const stylePropertyName in style) {
            object.style[stylePropertyName] = style[stylePropertyName];
        }
    }
}

const setObjectProperties = (object, properties) => {
    if (Array.isArray(properties)) {
        for(const propertiesObject of properties) {
            setObjectProperties(object, propertiesObject);
        }
    }
    else {
        for(const propertyName in properties) {
            if (propertyName === "style") {
                setElementStyle(object, properties[propertyName]);
            }
            else {
                object[propertyName] = properties[propertyName];
            }
        }
    }
}

/**
 * Object constructor.
 * 
 * It sets the properties of the given object from a property object.
 * 
 * A property object is either a plain object with key-value pairs
 * or an array with property objects.
 * 
 * @param {*} object target object.
 * @param {*} propertyObject property object.
 * 
 * @returns the object.
 */
export const Object = (object, propertyObject) => {
    setObjectProperties(object, propertyObject);
    return object;
}
