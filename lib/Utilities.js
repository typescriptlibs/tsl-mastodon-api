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
/**
 * Loads a file from a path.
 *
 * @memberof Utilities
 *
 * @param filePath
 * Path to the file.
 *
 * @param [mimeType]
 * Mime type of the file.
 *
 * @return
 * Promise with the file, if successful.
 *
 * @requires node-fetch
 */
async function fileFrom(filePath, mimeType) {
    const fileFrom = (await import('node-fetch')).fileFrom;
    return await fileFrom(filePath, mimeType);
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
    buildURLSearchParams,
    fileFrom,
};
export default Utilities;
//# sourceMappingURL=Utilities.js.map