/* *
 *
 *  Imports
 *
 * */
import Bridge from './Bridge.js';
import REST from './REST.js';
/* *
 *
 *  Functions
 *
 * */
function buildFormData(params, target = new Bridge.FormData()) {
    if (params) {
        buildKeyValues(params, (key, val) => target.append(key, val));
    }
    return target;
}
function buildHeaders(params, target = {}) {
    if (params) {
        buildKeyValues(params, (key, val) => target[key] = val);
    }
    return target;
}
function buildKeyValues(params, callback) {
    if (REST.isParamList(params)) {
        for (const keyVal of params) {
            const key = keyVal[0];
            const val = buildValue(keyVal[1]);
            if (val !== null) {
                callback(key, val);
            }
        }
    }
    else {
        for (const key in params) {
            const val = buildValue(params[key]);
            if (val !== null) {
                callback(key, val);
            }
        }
    }
}
function buildURL(base, path = '.', params) {
    const url = new Bridge.URL(path, base);
    if (params) {
        buildURLSearchParams(params, url.searchParams);
    }
    return url;
}
function buildURLSearchParams(params, target = new Bridge.URLSearchParams()) {
    if (params) {
        buildKeyValues(params, (key, val) => target.append(key, val));
    }
    return target;
}
function buildValue(value) {
    if (typeof value === 'undefined' ||
        value === null) {
        return null;
    }
    if (value instanceof Bridge.Blob) {
        return value;
    }
    else if (typeof value === 'object') {
        return JSON.stringify(value);
    }
    else {
        return `${value}`;
    }
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
    buildKeyValues,
    buildValue,
    fileFrom,
};
export default Utilities;
//# sourceMappingURL=Utilities.js.map