/* *
 *
 *  Imports
 *
 * */
import { Blob, FormData } from 'node-fetch';
import { URL } from 'url';
/* *
 *
 *  Functions
 *
 * */
function buildFormData(params, target = new FormData()) {
    let value;
    for (const key in params) {
        value = params[key];
        if (typeof value === 'undefined' ||
            value === null) {
            continue;
        }
        if (value instanceof Blob) {
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
    const url = new URL(path, base);
    if (params) {
        buildURLSearchParams(params, url.searchParams);
    }
    return url;
}
function buildURLSearchParams(params, target = new URLSearchParams()) {
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