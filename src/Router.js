import { isString, isRegExp, replaceAt } from "./util.js";

const urlSpecialChars = ['/', '\\?', '=', '&', '#'];
const urlReplacementChars = ['/', '?', '=', '&', '#'];

//the active routes
let activeRoutes = [];

//get routes to activate
const getRoutesToActivate = (routesToActivate, url, routes) => {
    for(const route of routes) {
        const result = route.match(url);
        if (result) {
            routesToActivate.push({
                onActivate: route.onActivate,
                params: result.params
            });
            getRoutesToActivate(routesToActivate, result.rest, route.children);
            break;
        }
    }
}

//locate and execute the appropriate route
const activateSpecificRoute = (url) => {
    const routesToActivate = [];
    getRoutesToActivate(routesToActivate, url, activeRoutes);
    if (routesToActivate.length > 0) {
        for(const routeToActivate of routesToActivate) {
            routeToActivate.onActivate(routeToActivate.params);
        }
    }
    else {
        throw new Error(`Router: activateRoute: no route found for url ${url}`);
    }
}

//read the current href and locate the appropriate route
const activateRoute = () => {
    activateSpecificRoute(`${window.location.pathname}${window.location.search}${window.location.hash}`);
}

//if user goes back and forth, or the current hash is changed, activate a route
window.addEventListener("popstate", activateRoute);
window.addEventListener("hashchange", activateRoute);

//get the local url if url is not local, then null is returned
const getLocalURL = (href) => {
    try {
        const url = new URL(href);
        if (window.location.protocol === url.protocol && window.location.hostname === url.hostname && window.location.port === url.port) {            
            return `${url.pathname}${url.search}${url.hash}`;
        }
        return null;
    }
    catch (ex) {
        return href;
    }
}

//if an <a> is clicked, then if the href is internal to the app, then do internal routing instead of fetching the app from the server
document.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
        const localURL = getLocalURL(event.target.href);
        if (localURL) {
            event.preventDefault();
            history.pushState(null, null, localURL);
            activateSpecificRoute(localURL);
        }
    }
});

//create a function which matches a regular expression
const getRegExpPatternMatchFunc = (regexp) => {
    return (str) => {
        regexp.lastIndex = 0;
        const result = regexp.exec(str);
        return result ? { success: result, rest: str.substring(regexp.lastIndex), params: result?.groups } : null;
    };
}

//creates a named regular expression function out of the given string pattern
const getStringPatternMatchFunc = (pattern) => {
    if (pattern.indexOf('%') >= 0) {
        pattern = decodeURIComponent(pattern);
    }

    pattern = pattern.replaceAll('/', "\\/");
    pattern = pattern.replaceAll('?', "\\?");

    let index = 0;
    let newPattern = "^";

    //replace parameters
    while (true) {
        //find the next parameter index; if not found, put the rest of the string in the new pattern
        const paramIndex = pattern.indexOf(':', index);
        if (paramIndex === -1) {
            newPattern += pattern.substring(index);
            break;
        }

        //find the closest url special character that ends the param name
        let endParamIndex = pattern.length;
        let endParamReplacementChar;
        for(let index = 0; index < urlSpecialChars.length; ++index) {
            const specialChar = urlSpecialChars[index];
            let endIndex = pattern.indexOf(specialChar, paramIndex + 1);
            if (endIndex >= 0 && endIndex < endParamIndex) {
                endParamIndex = endIndex;
                endParamReplacementChar = urlReplacementChars[index];
            }
        }

        //empty param name
        if (endParamIndex == paramIndex + 1) {
            throw new Error(`Router: Invalid parameter for pattern ${pattern} at index ${paramIndex}`);
        }

        //add the text up to the param start
        newPattern += pattern.substring(index, paramIndex);

        //get the param name
        const paramName = pattern.substring(paramIndex + 1, endParamIndex);

        //write the regexp named parameter
        if (endParamReplacementChar) {
            newPattern += `(?<${paramName}>[^${endParamReplacementChar}]+)`;
        }
        else {
            newPattern += `(?<${paramName}>.+)`;
        }

        //continue from the end of the param index
        index = endParamIndex;
    }

    return getRegExpPatternMatchFunc(new RegExp(newPattern, "y"));
}

/**
 * Constructs a route object.
 * Parameters in strings should be valid Javascript identifiers.
 * @param {String|RegExp|(str:String)=>{success:Boolean, rest:String, params: *}} pattern either a string to match (with parameters prefixed with ':'), or a regular expression to use for matching (named parameters supported), or a function that accepts a string and returns success, the remaining string to parse and the parsed parameters.
 * @param {({*})=>void} onActivate a function to call when there is a match; it is passed a parameters object of key to value pairs with the parameters parsed within the matched string.
 * @param  {...any} children children routes; order of routes is important.
 * @returns a route object.
 */
export const Route = (pattern, onActivate, ...children) => {
    if (!Array.isArray(children)) {
        throw new Error("Route: children: not an array");
    }

    if (isString(pattern)) {
        pattern = getStringPatternMatchFunc(pattern);
    }
    else if (isRegExp(pattern)) {
        pattern = getRegExpPatternMatchFunc(pattern);
    }
    return { 
        match: pattern,
        onActivate,
        children
    };
}

/**
 * Construct a router, i.e. activate the given set of routes.
 * @param  {...any} routes top-level routes.
 */
export const Router = (...routes) => {
    if (!Array.isArray(routes)) {
        throw new Error("Router: routes: not an array");
    }
    activeRoutes = [...routes];
    activateRoute();
}

/**
 * Navigates to the specific route.
 * @param {String} url url to navigate to.
 * @param {{replace: Boolean, state: *}} options optional option object that defines a replace/push flag and an optional state.
 */
export const navigate = (url, options) => {
    //check if url is valid
    new URL(url, `${window.location.protocol}//${window.location.hostname}${window.location.port?.length > 0 ? `:${window.location.port}` : ""}`);

    //handle push/replace
    const replace = options?.replace;
    if (replace) {
        history.replaceState(options?.state, null, url);
    }
    else {
        history.pushState(options?.state, null, url);
    }

    //activate route
    activateSpecificRoute(url);
}
