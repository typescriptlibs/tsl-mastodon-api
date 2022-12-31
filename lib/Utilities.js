/* *
 *
 *  Imports
 *
 * */
import Bridge from './Bridge.js';
/* *
 *
 *  Functions
 *
 * */
function buildFormData(params, target = new Bridge.FormData()) {
    let value;
    for (const key in params) {
        value = params[key];
        if (typeof value === 'undefined' ||
            value === null) {
            continue;
        }
        if (value instanceof Bridge.Blob) {
            target.append(key, value);
        }
        else if (typeof value === 'object') {
            target.append(key, JSON.stringify(value));
        }
        else {
            target.append(key, `${value}`);
        }
    }
    return target;
}
function buildHeaders(params, target = {}) {
    let value;
    for (const key in params) {
        value = params[key];
        if (typeof value === 'undefined' ||
            value === null) {
            continue;
        }
        if (typeof value === 'object') {
            target[key] = JSON.stringify(value);
        }
        else {
            target[key] = `${value}`;
        }
    }
    return target;
}
function buildURL(base, path = '.', params) {
    const url = new Bridge.URL(path, base);
    if (params) {
        buildURLSearchParams(params, url.searchParams);
    }
    return url;
}
function buildURLSearchParams(params, target = new Bridge.URLSearchParams()) {
    let value;
    for (const key in params) {
        value = params[key];
        if (typeof value === 'undefined' ||
            value === null) {
            continue;
        }
        if (typeof value === 'object') {
            target.append(key, JSON.stringify(value));
        }
        else {
            target.append(key, `${value}`);
        }
    }
    return target;
}
/* *
 *
 *  Default Export
 *
 * */
export const Utilities = {
    buildHeaders,
    buildFormData,
    buildURL,
    buildURLSearchParams
};
export default Utilities;
//# sourceMappingURL=Utilities.js.map